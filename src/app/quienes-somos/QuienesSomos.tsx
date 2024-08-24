'use client';

import { Title, Text, Box, Container, Stack, Card, TitleOrder } from '@mantine/core';

interface SectionProps {
  title: string;
  order: TitleOrder | undefined;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, order, children }) => (
  <Box>
    <Title order={order} fz="xl" fw={500} tt="uppercase" c="brand.7">
      {title}
    </Title>
    {children}
  </Box>
);

interface ValueTextProps {
  title: string;
  children: React.ReactNode;
}

const ValueText: React.FC<ValueTextProps> = ({ title, children }) => (
  <Text fz="lg" c="brand.7" fw={500}>
    <Box component="span" fw={600}>
      {title}:&nbsp;
    </Box>
    {children}
  </Text>
);

export const QuienesSomos: React.FC = () => {
  return (
    <Container size="lg">
      <Card padding="45px">
        <Stack c="brand.8">
          <Section title="Nuestra Historia" order={1}>
            <Text fz="lg" c="brand.7" fw={500}>
              En K&apos;OOBEN, cada pieza de mobiliario que creamos cuenta una historia de tradición y dedicación. Somos
              una empresa familiar, nacida del amor por el diseño y el deseo de mejorar los espacios donde vivimos.
              Desde nuestros inicios, hemos trabajado incansablemente para ofrecer muebles que no solo embellecen, sino
              que también funcionalizan tu hogar, aportando un equilibrio perfecto entre estética y practicidad.
            </Text>
          </Section>

          <Section title="Misión" order={3}>
            <Text fz="lg" c="brand.7" fw={500}>
              En K&apos;OOBEN, creemos que cada mueble debe ser una pieza especial que complemente y mejore la vida
              cotidiana de nuestros clientes. Nuestra misión es brindar muebles de alta calidad que combinan diseño y
              durabilidad, adaptándose a las necesidades y gustos de quienes confían en nosotros. No se trata solo de
              llenar un espacio, sino de crear ambientes que inspiren y den vida a cada hogar.
            </Text>
          </Section>

          <Section title="Valores" order={3}>
            <ValueText title="Calidad">
              La calidad es el corazón de todo lo que hacemos. Utilizamos materiales de primera categoría para
              garantizar que cada mueble que sale de nuestro taller tenga la longevidad y belleza que nuestros clientes
              esperan y merecen.
            </ValueText>

            <ValueText title="Innovación">
              En un mundo en constante cambio, nos mantenemos a la vanguardia buscando nuevas tendencias y técnicas.
              Innovar es nuestra manera de asegurar que siempre te ofrecemos lo mejor.
            </ValueText>

            <ValueText title="Servicio al Cliente">
              Sabemos que elegir un mueble es una decisión importante. Por eso, tu satisfacción es nuestra prioridad.
              Ofrecemos atención personalizada y asesoramiento experto para ayudarte a encontrar el mueble perfecto que
              se ajuste a tus necesidades y estilo.
            </ValueText>
          </Section>

          <Section title="Descubre nuestra colección" order={3}>
            <Text fz="lg" c="brand.7" fw={500}>
              Explora nuestro catálogo y encuentra el mueble ideal para cada espacio de tu hogar. Desde un elegante
              escritorio para tu oficina, un cómodo respaldo para tu cama, hasta un moderno mueble de TV, en
              K&apos;OOBEN tenemos justo lo que necesitas para transformar tu casa en el hogar que siempre has soñado.
            </Text>
          </Section>

          <Section title="Gracias por confiar!" order={3}>
            <Text fz="lg" c="brand.7" fw={500}>
              En K&apos;OOBEN, cada día trabajamos con la pasión y dedicación que caracteriza a una empresa familiar
              comprometida con sus valores. Gracias por confiar en nosotros. Juntos, hacemos de tu casa un hogar.
            </Text>
          </Section>
        </Stack>
      </Card>
    </Container>
  );
};
