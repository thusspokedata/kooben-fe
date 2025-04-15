'use client';

import { useForm } from '@mantine/form';
import { TextInput, Button, Stack, Text, Group, Checkbox, Select } from '@mantine/core';
import { useAddressStore } from '@/store';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { PROVINCES } from '@/constants/locations';

interface FormValues {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  phone: string;
  province: string;
  rememberAddress: boolean;
  clerkId: string;
}

export const CustomerInfo = () => {
  const router = useRouter();
  const { user } = useUser();
  const setAddress = useAddressStore((state) => state.setAddress);
  const savedAddress = useAddressStore((state) => state.address);

  const form = useForm<FormValues>({
    initialValues: {
      email: savedAddress?.email || user?.primaryEmailAddress?.emailAddress || '',
      firstName: savedAddress?.firstName || '',
      lastName: savedAddress?.lastName || '',
      address: savedAddress?.address || '',
      zipCode: savedAddress?.zipCode || '',
      city: savedAddress?.city || '',
      phone: savedAddress?.phone || '',
      province: savedAddress?.province || '',
      rememberAddress: savedAddress?.clerkId ? true : false,
      clerkId: user?.id || '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      firstName: (value) =>
        value.length < 3 ? 'El nombre debe tener al menos 3 caracteres' : null,
      lastName: (value) =>
        value.length < 3 ? 'El apellido debe tener al menos 3 caracteres' : null,
      address: (value) =>
        value.length < 5 ? 'La dirección debe tener al menos 5 caracteres' : null,
      zipCode: (value) =>
        value.length < 4 ? 'El código postal debe tener al menos 4 caracteres' : null,
      city: (value) => (value.length < 2 ? 'La ciudad debe tener al menos 2 caracteres' : null),
      phone: (value) => (value.length < 9 ? 'El teléfono debe tener al menos 9 caracteres' : null),
      province: (value) =>
        value.length < 2 ? 'La provincia debe tener al menos 2 caracteres' : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    setAddress({
      ...values,
      clerkId: user?.id || '',
    });
    router.push('/verificar-compra');
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="md">
        <TextInput
          size="md"
          withAsterisk
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <Group grow>
          <TextInput
            size="md"
            withAsterisk
            label="Nombre"
            placeholder="Nombre"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            size="md"
            withAsterisk
            label="Apellido"
            placeholder="Apellido"
            {...form.getInputProps('lastName')}
          />
        </Group>
        <TextInput
          size="md"
          withAsterisk
          label="Dirección"
          placeholder="Dirección"
          {...form.getInputProps('address')}
        />
        <Group grow>
          <TextInput
            size="md"
            withAsterisk
            label="Código postal"
            placeholder="Código postal"
            {...form.getInputProps('zipCode')}
          />
          <TextInput
            size="md"
            withAsterisk
            label="Ciudad"
            placeholder="Ciudad"
            {...form.getInputProps('city')}
          />
        </Group>
        <Group grow>
          <TextInput
            size="md"
            withAsterisk
            label="Teléfono"
            placeholder="Teléfono"
            {...form.getInputProps('phone')}
          />
          <Select
            size="md"
            withAsterisk
            label="Provincia"
            placeholder="Provincia"
            data={PROVINCES.map((provincia) => ({ value: provincia, label: provincia }))}
            {...form.getInputProps('province')}
          />
        </Group>
        <Checkbox
          label="Recordar esta dirección para futuras compras"
          {...form.getInputProps('rememberAddress', { type: 'checkbox' })}
        />
        <Button type="submit" size="md" mt="sm">
          Continuar
        </Button>
      </Stack>
    </form>
  );
};
