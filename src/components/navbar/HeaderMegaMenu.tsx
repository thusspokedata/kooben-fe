'use client';

import {
  Group,
  Button,
  Anchor,
  Divider,
  Burger,
  Drawer,
  Flex,
  Container,
  Box,
  useMantineTheme,
  Text,
  ActionIcon,
  Center,
} from '@mantine/core';
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

const cartLink = { link: '/carrito', label: 'Carrito (0)' };

export const HeaderMegaMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const pathname = usePathname();
  const theme = useMantineTheme();

  useEffect(() => {
    const activeIndex = mainLinks.findIndex((link) => link.link === pathname);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [pathname]);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      component={Link}
      size="lg"
      fw={400}
      c="brand.9"
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
        closeDrawer();
      }}
    >
      {item.label}
    </Anchor>
  ));

  const mainItemsDrawer = [...mainLinks, cartLink].map((item, index) => (
    <Anchor
      href={item.link}
      key={item.label}
      className={classes.mainLink}
      component={Link}
      c={theme.colors.brand[9]}
      onClick={() => {
        setActive(index);
        closeDrawer();
      }}
    >
      <Text fz="lg">{item.label}</Text>
    </Anchor>
  ));

  return (
    <Container size="lg">
      <header className={classes.header}>
        <Group justify="space-between" h="100%" mt="sm" gap="0px">
          <Flex justify="space-between" w="100%" align="center">
            <LogoKooben />

            <Flex align="center" gap="xs" hiddenFrom="sm">
              <ActionIcon variant="subtle" color="brand.7">
                <IconUserFilled size={24} />
              </ActionIcon>
              <ActionIcon variant="subtle" color="brand.7">
                <IconShoppingBagPlus size={24} />
              </ActionIcon>

              <Burger opened={drawerOpened} color="brand.8" onClick={toggleDrawer} />
            </Flex>

            <Group visibleFrom="sm">
              <Button
                component="a"
                href="/sign-in"
                variant="transparent"
                fz="md"
                fw={400}
                c="brand.8"
                leftSection={<IconUserFilled size={24} />}
              >
                <Text c="brand.9">Iniciar sesión</Text>
              </Button>
              <Button
                component="a"
                href="/sign-in"
                variant="transparent"
                fz="md"
                fw={400}
                c="brand.8"
                leftSection={<IconShoppingBagPlus size={24} />}
              >
                <Text c="brand.9">Carrito (0)</Text>
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
        title={
          <Center w="100%">
            <LogoKooben />
          </Center>
        }
        hiddenFrom="sm"
        zIndex={1000000}
        bg="#F3F3F3"
      >
        <Box>
          <Divider mt="sm" size="md" color={theme.colors['brand-secondary'][6]} />
          <Flex justify="flex-start" direction="column" align="flex-start" mt="7xl" mb="11xl">
            {mainItemsDrawer}
          </Flex>

          <Divider mb="sm" size="md" color={theme.colors['brand-secondary'][6]} />

          <Flex justify="space-around" direction="column" align="center" pb="xl" px="md" mt={84} gap="xl">
            <Button fz="md" c="white" color={theme.colors.brand[7]} component="a" w="50%" href="/sign-in">
              Iniciar sesión
            </Button>
            <Button fz="md" variant="transparent" component="a" w="50%" href="/sign-up">
              Registrarse
            </Button>
          </Flex>
        </Box>
      </Drawer>
    </Container>
  );
};
