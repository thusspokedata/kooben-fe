import { QuienesSomos } from './QuienesSomos';
import { Flex, Image } from '@mantine/core';
import NextImage from 'next/image';

interface HistoriaImageProps {
  src: string;
}

const HistoriaImage = ({ src }: HistoriaImageProps) => (
  <Image
    component={NextImage}
    radius="md"
    height={500}
    width={400}
    fit="contain"
    alt="Haciendo una instalación"
    src={src}
  />
);

const Historia: React.FC = () => {
  return (
    <>
      <QuienesSomos />
      <Flex
        justify="center"
        gap="11xl"
        mt="11xl"
        mb="11xl"
        w="100%"
        align="center"
        direction={{ base: 'column', sm: 'row' }}
      >
        <HistoriaImage src="/images/kooben-historia1.jpeg" />
        <HistoriaImage src="/images/kooben-historia2.jpeg" />
      </Flex>
    </>
  );
};

export default Historia;
