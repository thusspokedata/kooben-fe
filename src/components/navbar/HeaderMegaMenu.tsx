'use client';

import {
  Group,
  Button,
  UnstyledButton,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Flex,
  Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconUserFilled, IconShoppingBagPlus } from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LogoKooben from '../../../public/assets/svgs/LogoKooben';

const mainLinks = [
  { link: '/', label: 'Inicio' },
  { link: '/catalogo', label: 'Catálogo' },
  { link: '/quienes-somos', label: 'Quiénes somos' },
  { link: '/contacto', label: 'Contacto' },
];

export const HeaderMegaMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const theme = useMantineTheme();
  const pathname = usePathname();

  useEffect(() => {
    const activeIndex = mainLinks.findIndex((link) => link.link === pathname);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [pathname]);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      size="6xl"
      fw={500}
      component={Link}
      c="black"
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Container size="lg">
      <header className={classes.header}>
        <Group justify="space-between" h="100%" mt="sm" gap="0px">
          <Flex justify="space-between" w="100%" align="center">
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
            <LogoKooben />

            <Group visibleFrom="sm">
              <Button
                component="a"
                href="/sign-in"
                c="black"
                leftSection={<IconUserFilled size={20} />}
                variant="white"
              >
                Iniciar sesión
              </Button>
              <Button
                component="a"
                href="/sign-in"
                c="black"
                leftSection={<IconShoppingBagPlus size={20} />}
                variant="white"
              >
                Carrito (0)
              </Button>
            </Group>
          </Flex>
          <Group gap={80} justify="flex-end" className={classes.mainLinks} visibleFrom="sm">
            {mainItems}
          </Group>
        </Group>
        <Divider size="md" color="#52796F" />
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xs"
        title={<LogoKooben />}
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]} />
            </Center>
          </UnstyledButton>
          {/* <Collapse in={linksOpened}>{links}</Collapse> */}
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy2
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          </Group>
        </ScrollArea>
      </Drawer>
    </Container>
  );
};
