'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Select, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useAddressStore } from '@/store';
import type { CustomerInfo as ICustomerInfo } from '@/interfaces';
import classes from './CustomerInfo.module.css';
import {
  getUserByClerkId,
  saveCustomerAddress,
  getCustomerAddresses,
} from '@/services/saveCustomerInfo';
import { formatAddress } from '@/utils/formatting';

export const CustomerInfo = () => {
  const { user } = useUser();
  const setAddress = useAddressStore((state) => state.setAddress);
  const savedAddress = useAddressStore((state) => state.address);
  const [userId, setUserId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const form = useForm<ICustomerInfo>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      address: '',
      zipCode: '',
      city: '',
      phone: '',
      province: 'Córdoba',
      rememberAddress: false,
      clerkId: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo electrónico inválido'),
      name: (value) => (!value ? 'El nombre es requerido' : null),
      clerkId: (value) => (!value ? 'El ID de Clerk es requerido' : null),
      address: (value) => (!value ? 'La dirección es requerida' : null),
      zipCode: (value) => (!value ? 'El código postal es requerido' : null),
      city: (value) => (!value ? 'La ciudad es requerida' : null),
      province: (value) => (!value ? 'La provincia es requerida' : null),
    },
  });

  // Fetch user data and handle form population
  useEffect(() => {
    const loadUserData = async () => {
      if (!user?.id) return;

      // Log Clerk user data to see what's available
      console.log('Clerk user data:', {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username,
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
      });

      // STEP 1: Set basic user data from Clerk
      // This is important regardless of the address source
      const userName =
        user.fullName || user.username || `${user.firstName || ''} ${user.lastName || ''}`.trim();
      const userEmail = user.primaryEmailAddress?.emailAddress || '';
      const userClerkId = user.id;

      console.log('Setting basic user data:', { userName, userEmail, userClerkId });

      // Apply basic user data
      form.setFieldValue('name', userName);
      form.setFieldValue('email', userEmail);
      form.setFieldValue('clerkId', userClerkId);

      try {
        // STEP 2: Check for data in localStorage
        const hasSavedData = savedAddress && savedAddress.email !== '' && savedAddress.name !== '';

        if (hasSavedData) {
          console.log('Loading data from localStorage:', savedAddress);
          // Use data from localStorage but keep clerkId
          form.setValues({
            ...savedAddress,
            clerkId: userClerkId, // Keep the Clerk ID
          });
          return; // Exit early if we loaded from localStorage
        }

        // STEP 3: If no localStorage data, try to get data from database
        console.log('Fetching user from database with clerk ID:', userClerkId);
        const dbUser = await getUserByClerkId(userClerkId);

        if (dbUser) {
          setUserId(dbUser.id);
          console.log('User found in database:', dbUser);

          // STEP 4: Try to get saved addresses
          try {
            const addresses = await getCustomerAddresses(dbUser.id);
            console.log('Addresses from database:', addresses);

            // If there are addresses, use the first one
            if (addresses && addresses.length > 0) {
              const dbAddress = addresses[0];
              console.log('Setting address data from database:', dbAddress);

              // Update only address fields, keeping basic data
              form.setValues({
                name: userName,
                email: userEmail,
                clerkId: userClerkId,
                ...formatAddress(dbAddress),
                rememberAddress: true,
              });
            }
          } catch (addressError) {
            console.error('Error fetching customer addresses:', addressError);
          }
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, [user, savedAddress, form]);

  const handleSubmit = async (values: ICustomerInfo) => {
    try {
      setIsSaving(true);
      const { rememberAddress, ...addressData } = values;

      // Extract address fields with default empty strings
      const formattedAddress = formatAddress(addressData);

      // Always save to local store
      setAddress({
        ...addressData,
        ...formattedAddress,
      });

      // If rememberAddress is true and user is authenticated, save to database
      if (rememberAddress && userId && user?.id) {
        try {
          await saveCustomerAddress(userId, formattedAddress);

          notifications.show({
            title: 'Dirección guardada',
            message: 'Tu dirección se ha guardado en tu cuenta para futuras compras',
            color: 'green',
          });
        } catch (error: unknown) {
          // Log detailed error for developers
          console.error('Error saving address:', error);

          // Simple message for users
          notifications.show({
            title: 'Error al guardar',
            message:
              'No pudimos guardar tu dirección en la base de datos, pero se usará para este pedido',
            color: 'yellow',
          });
        }
      }

      notifications.show({
        title: 'Éxito',
        message: 'Información guardada correctamente',
        color: 'green',
      });
    } catch (error) {
      console.error('Error saving customer info:', error);
      notifications.show({
        title: 'Error',
        message: 'Hubo un error al guardar la información. Por favor, inténtalo de nuevo.',
        color: 'red',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const provincias = [
    'Buenos Aires',
    'Catamarca',
    'Chaco',
    'Chubut',
    'Córdoba',
    'Corrientes',
    'Entre Ríos',
    'Formosa',
    'Jujuy',
    'La Pampa',
    'La Rioja',
    'Mendoza',
    'Misiones',
    'Neuquén',
    'Río Negro',
    'Salta',
    'San Juan',
    'San Luis',
    'Santa Cruz',
    'Santa Fe',
    'Santiago del Estero',
    'Tierra del Fuego',
    'Tucumán',
  ].sort();

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="lg">
        <TextInput
          size="md"
          withAsterisk
          label="Nombre y apellido"
          placeholder="Nombre y apellido"
          {...form.getInputProps('name')}
        />
        <TextInput
          size="md"
          withAsterisk
          label="Correo electrónico"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <TextInput
          size="md"
          withAsterisk
          label="Dirección"
          placeholder="Dirección"
          {...form.getInputProps('address')}
        />

        <TextInput
          size="md"
          withAsterisk
          label="Código postal"
          placeholder="Código postal"
          {...form.getInputProps('zipCode')}
        />

        <Select
          size="md"
          withAsterisk
          label="Provincia"
          placeholder="Provincia"
          data={provincias.map((provincia) => ({ value: provincia, label: provincia }))}
          {...form.getInputProps('province')}
        />

        <TextInput
          size="md"
          withAsterisk
          label="Ciudad"
          placeholder="Ciudad"
          {...form.getInputProps('city')}
        />

        <TextInput
          size="md"
          label="Teléfono"
          placeholder="Teléfono"
          {...form.getInputProps('phone')}
        />

        <Checkbox
          size="md"
          mt="md"
          label="Recordar dirección"
          {...form.getInputProps('rememberAddress', { type: 'checkbox' })}
          disabled={!user} // Disable if user is not logged in
        />

        <Group justify="flex-end">
          <Button
            type="submit"
            disabled={!form.isValid() || isSaving}
            loading={isSaving}
            color="brand.8"
            className={classes.button}
          >
            Guardar
          </Button>
        </Group>
      </Stack>
    </form>
  );
};
