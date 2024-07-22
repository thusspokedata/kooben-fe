'use client';

import { Title, Text, Box, Container, Stack, Card, useMantineTheme } from '@mantine/core';

export const QuienesSomos = () => {
  const theme = useMantineTheme();
  return (
    <Container size="lg">
      <Card padding="45px">
        <Stack c="brand.8">
          <Box>
            <Title order={1} size={theme.fontSizes['3xl']} fw={400} tt="uppercase">
              Nuestra Historia
            </Title>
            <Text fz="lg">
              En K&apos;OOBEN, cada pieza de mobiliario que creamos cuenta una historia de tradición y dedicación. Somos
              una empresa familiar, nacida del amor por el diseño y el deseo de mejorar los espacios donde vivimos.
              Desde nuestros inicios, hemos trabajado incansablemente para ofrecer muebles que no solo embellecen, sino
              que también funcionalizan tu hogar, aportando un equilibrio perfecto entre estética y practicidad.
            </Text>
          </Box>

          <Box>
            <Title order={3} size={theme.fontSizes['3xl']} fw={400} tt="uppercase">
              Misión
            </Title>
            <Text fz="lg">
              En K&apos;OOBEN, creemos que cada mueble debe ser una pieza especial que complemente y mejore la vida
              cotidiana de nuestros clientes. Nuestra misión es brindar muebles de alta calidad que combinan diseño y
              durabilidad, adaptándose a las necesidades y gustos de quienes confían en nosotros. No se trata solo de
              llenar un espacio, sino de crear ambientes que inspiren y den vida a cada hogar.
            </Text>
          </Box>

          <Box>
            <Title order={3} size={theme.fontSizes['3xl']} fw={400} tt="uppercase">
              Valores
            </Title>
            <Text fz="lg">
              <Box component="span" fw={600}>
                Calidad:&nbsp;
              </Box>
              La calidad es el corazón de todo lo que hacemos. Utilizamos materiales de primera categoría para
              garantizar que cada mueble que sale de nuestro taller tenga la longevidad y belleza que nuestros clientes
              esperan y merecen.
            </Text>

            <Text fz="lg">
              <Box component="span" fw={600}>
                Innovación:&nbsp;
              </Box>
              En un mundo en constante cambio, nos mantenemos a la vanguardia buscando nuevas tendencias y técnicas.
              Innovar es nuestra manera de asegurar que siempre te ofrecemos lo mejor.
            </Text>

            <Text fz="lg">
              <Box component="span" fw={600}>
                Servicio al Cliente:&nbsp;
              </Box>
              Sabemos que elegir un mueble es una decisión importante. Por eso, tu satisfacción es nuestra prioridad.
              Ofrecemos atención personalizada y asesoramiento experto para ayudarte a encontrar el mueble perfecto que
              se ajuste a tus necesidades y estilo.
            </Text>
          </Box>
        </Stack>
      </Card>
    </Container>
  );
};
