'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Select, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { useEffect, useState } from 'react';
import { useAddressStore } from '@/store';
import type { CustomerInfo as ICustomerInfo } from '@/interfaces';
import classes from './CustomerInfo.module.css';
import { getUserByClerkId, saveCustomerAddress } from '@/services/saveCustomerInfo';

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

  // Fetch user data from the database when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const dbUser = await getUserByClerkId(user.id);
          if (dbUser) {
            setUserId(dbUser.id);

            // If user has a saved address in DB, populate form
            if (dbUser.addresses && dbUser.addresses.length > 0) {
              const dbAddress = dbUser.addresses[0];
              form.setValues({
                ...form.values,
                address: dbAddress.address || '',
                zipCode: dbAddress.zipCode || '',
                city: dbAddress.city || '',
                province: dbAddress.province || '',
                phone: dbAddress.phone || '',
                rememberAddress: true,
              });
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [user]);

  // Load data when component mounts
  useEffect(() => {
    // First check if there's saved data in localStorage (via Zustand)
    const hasSavedData = savedAddress && savedAddress.email !== '' && savedAddress.name !== '';

    if (hasSavedData) {
      form.setValues({
        ...savedAddress,
      });
    } else if (user) {
      // If no saved data but user is logged in, use Clerk data
      form.setValues({
        email: user.primaryEmailAddress?.emailAddress || '',
        name: user.username || '',
        clerkId: user.id,
      });
    }
  }, [user, savedAddress]);

  const handleSubmit = async (values: ICustomerInfo) => {
    try {
      setIsSaving(true);
      const { rememberAddress, ...addressData } = values;

      // Always save to local store
      setAddress({
        ...addressData,
        address: addressData.address || '',
        zipCode: addressData.zipCode || '',
        city: addressData.city || '',
        province: addressData.province || '',
        phone: addressData.phone || '',
      });

      // If rememberAddress is true and user is authenticated, save to database
      if (rememberAddress && userId && user?.id) {
        try {
          // Transform form data to match CustomerAddress format
          const addressToSave = {
            address: addressData.address || '',
            zipCode: addressData.zipCode || '',
            city: addressData.city || '',
            province: addressData.province || '',
            phone: addressData.phone || '',
          };

          await saveCustomerAddress(userId, addressToSave);
          notifications.show({
            title: 'Dirección guardada',
            message: 'Tu dirección se ha guardado en tu cuenta para futuras compras',
            color: 'green',
          });
        } catch (error) {
          console.error('Error saving address to database:', error);
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
