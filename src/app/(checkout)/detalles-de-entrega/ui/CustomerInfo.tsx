'use client';

import { useForm } from '@mantine/form';
import { TextInput, Checkbox, Button, Group, Select, Stack } from '@mantine/core';

export const CustomerInfo = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      address: '',
      zipCode: '',
      city: '',
      phone: '',
      province: 'Córdoba', // Valor por defecto para la provincia
      rememberAddress: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Correo electrónico inválido'),
    },
  });

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
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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

        <TextInput size="md" withAsterisk label="Ciudad" placeholder="Ciudad" {...form.getInputProps('city')} />

        <TextInput size="md" withAsterisk label="Teléfono" placeholder="Teléfono" {...form.getInputProps('phone')} />

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
