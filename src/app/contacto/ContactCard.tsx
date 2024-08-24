'use client';

import {
  Title,
  Text,
  Card,
  useMantineTheme,
  Divider,
  Center,
  Flex,
  CopyButton,
  Tooltip,
  ActionIcon,
  rem,
} from '@mantine/core';
import { IconCheck, IconCopy, IconMailFilled, IconPhoneFilled } from '@tabler/icons-react';

interface ContactInfoProps {
  icon: React.ElementType;
  text: string;
  copyValue: string;
}

const ContactInfo = ({ icon: Icon, text, copyValue }: ContactInfoProps) => {
  return (
    <Flex gap="md" align="center" w="100%" justify="center">
      <Icon size={24} color="white" />
      <Text c="white">{text}</Text>
      <CopyButton value={copyValue} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="right">
            <ActionIcon color={copied ? 'teal' : 'gray'} variant="subtle" onClick={copy}>
              {copied ? <IconCheck style={{ width: rem(16) }} /> : <IconCopy style={{ width: rem(16) }} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Flex>
  );
};

const ContactCard: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Center w="100%" mb="11xl">
      <Card bg={theme.colors.brand[8]} maw={700} mah={580} w="100%" h="520" mx={10}>
        <Flex direction="column" justify="center" h="100%" gap="md" p={{ base: 20, sm: 120 }}>
          <ContactInfo icon={IconPhoneFilled} text="Tel: +54 9 351 2881616" copyValue="+54 9 351 2881616" />

          <Divider color="white" size="sm" my="md" />

          <ContactInfo icon={IconMailFilled} text="koobenargentina@gmail.com" copyValue="koobenargentina@gmail.com" />

          <Divider color="white" size="sm" my="md" />

          <Flex gap="md" align="center" direction="column">
            <Title order={1} fz="h4" c="white" tt="uppercase">
              horarios de atención:
            </Title>
            <Text c="white">Lunes a Viernes de 9:00 a 18:00</Text>
          </Flex>
        </Flex>
      </Card>
    </Center>
  );
};

export default ContactCard;
