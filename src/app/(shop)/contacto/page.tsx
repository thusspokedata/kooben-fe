import { Container, Stack, Title, Text } from '@mantine/core';

const Contacto = () => {
  return (
    <Container>
      <Stack align="center" justify="center" gap="md">
        <Text>
          SI TIENES ALGUNA PREGUNTA O NECESITAS ASISTENCIA, NO DUDES EN PONERTE EN CONTACTO CON NOSOTROS. ESTAMOS AQUÍ
          PARA AYUDARTE. NUESTO HORARIO DE ATENCIÓN: LUNES A VIERNES, DE 9:00 A 18:00
        </Text>

        <Title order={1} fz="h4">
          DATOS DE CONTACTO
        </Title>
        <Text>Tel: +54 9 351 2881616</Text>
        <Text>koobenargentina@gmail.com</Text>
      </Stack>
    </Container>
  );
};

export default Contacto;
