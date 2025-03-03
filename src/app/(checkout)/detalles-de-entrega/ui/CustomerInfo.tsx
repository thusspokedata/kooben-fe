'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Select, Stack } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { customerService } from '@/api/customer';
import type { CustomerInfo as CustomerInfoType } from '@/interfaces/customer.interface';

export const CustomerInfo = () => {
  const { user } = useUser();

  const form = useForm({
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
    },
  });

  useEffect(() => {
    if (user) {
      form.setValues({
        email: user.primaryEmailAddress?.emailAddress || '',
        name: user.fullName || '',
        clerkId: user.id,
      });
    }
  }, [user]);

  const handleSubmit = async (values: CustomerInfoType) => {
    try {
      if (values.rememberAddress) {
        await customerService.saveCustomerAddress({
          address: values.address || '',
          zipCode: values.zipCode || '',
          city: values.city || '',
          province: values.province || '',
          isDefault: true,
        });
      }

      console.log('💾 Saving customer info:', values);
      await customerService.saveCustomerInfo(values);
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
  ];

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
          label="Dirección"
          placeholder="Dirección"
          {...form.getInputProps('address')}
        />

        <TextInput
          size="md"
          label="Código postal"
          placeholder="Código postal"
          {...form.getInputProps('zipCode')}
        />

        <Select
          size="md"
          label="Provincia"
          placeholder="Provincia"
          data={provincias.map((provincia) => ({ value: provincia, label: provincia }))}
          {...form.getInputProps('province')}
        />

        <TextInput size="md" label="Ciudad" placeholder="Ciudad" {...form.getInputProps('city')} />

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

        <Group justify="flex-end" mt="md">
          <Button type="submit">Continuar</Button>
        </Group>
      </Stack>
    </form>
  );
};
