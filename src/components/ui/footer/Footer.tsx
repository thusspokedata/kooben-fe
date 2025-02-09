'use client';

import { Group, ActionIcon, rem, Text, Flex } from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconBrandFacebookFilled,
  IconProps,
} from '@tabler/icons-react';

interface SocialIconProps {
  Icon: React.ElementType<IconProps>;
}

function SocialIcon({ Icon }: SocialIconProps) {
  return (
    <ActionIcon size="md" variant="default" radius="xl">
      <Icon style={{ width: rem(20), height: rem(20), color: '#84A98C' }} stroke={2} />
    </ActionIcon>
  );
}

export function Footer() {
  return (
    <Flex
      w="100%"
      h={200}
      bg="#84A98C"
      justify="center"
      align="center"
      direction="column"
      gap="md"
    >
      <Group gap="md" justify="flex-end" wrap="nowrap">
        <SocialIcon Icon={IconBrandFacebookFilled} />
        <SocialIcon Icon={IconBrandInstagram} />
        <SocialIcon Icon={IconBrandWhatsapp} />
      </Group>
      <Text c="white">© 2024 Kooben. Todos los derechos reservados.</Text>
    </Flex>
  );
}
