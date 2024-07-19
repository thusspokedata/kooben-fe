'use client';

import { Group, Button, Anchor, Divider, Burger, Drawer, Flex, Container, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconUserFilled, IconShoppingBagPlus } from '@tabler/icons-react';
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
  const [active, setActive] = useState(0);
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
        closeDrawer();
      }}
    >
      {item.label}
    </Anchor>
  ));

  const mainItemsDrawer = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      size="6xl"
      fw={500}
      component={Link}
      c="black"
      onClick={() => {
        setActive(index);
        closeDrawer();
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
                color="#c5c5c5"
                leftSection={<IconUserFilled size={20} />}
              >
                Iniciar sesión
              </Button>
              <Button
                component="a"
                href="/sign-in"
                c="black"
                leftSection={<IconShoppingBagPlus size={20} />}
                color="#c5c5c5"
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
        <Box>
          <Divider my="sm" />
          <Flex justify="flex-start" direction="column">
            {mainItemsDrawer}
          </Flex>
          <Button
            component="a"
            href="/sign-in"
            c="black"
            leftSection={<IconShoppingBagPlus size={20} />}
            variant="white"
          >
            Carrito (0)
          </Button>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default" component="a" href="/sign-in">
              Iniciar sesión
            </Button>
            <Button component="a" href="/sign-up">
              Registrarse
            </Button>
          </Group>
        </Box>
      </Drawer>
    </Container>
  );
};
