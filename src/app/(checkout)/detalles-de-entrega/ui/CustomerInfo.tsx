'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Select, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useAddressStore } from '@/store';
import type { CustomerInfo as ICustomerInfo } from '@/interfaces';
import classes from './CustomerInfo.module.css';

export const CustomerInfo = () => {
  const { user } = useUser();
  const setAddress = useAddressStore((state) => state.setAddress);
  const savedAddress = useAddressStore((state) => state.address);

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
        name: user.fullName || '',
        clerkId: user.id,
      });
    }
  }, [user, savedAddress]);

  const handleSubmit = async (values: ICustomerInfo) => {
    try {
      const { rememberAddress, ...addressData } = values;
      setAddress({
        ...addressData,
        phone: addressData.phone || '',
      });

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
        />

        <Group justify="flex-end">
          <Button
            type="submit"
            disabled={!form.isValid()}
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
