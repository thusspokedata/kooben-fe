import { QuienesSomos } from './QuienesSomos';
import { Flex, Image } from '@mantine/core';
import NextImage from 'next/image';

const Historia = () => {
  return (
    <>
      <QuienesSomos />
      <Flex justify="center" gap="11xl" mt="11xl" w="100%" align="center">
        <Image
          component={NextImage}
          radius="md"
          height={500}
          width={400}
          fit="contain"
          alt="Haciendo una instalación"
          src="/images/kooben-historia1.jpeg"
        />
        <Image
          component={NextImage}
          radius="md"
          height={500}
          width={400}
          fit="contain"
          alt="Haciendo una instalación"
          src="/images/kooben-historia2.jpeg"
        />
      </Flex>
    </>
  );
};

export default Historia;
