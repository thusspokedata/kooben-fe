'use client';

import { useState, useEffect, useMemo } from 'react';
import {
  Group,
  Button,
  Anchor,
  Divider,
  Burger,
  Drawer,
  Flex,
  Box,
  useMantineTheme,
  Text,
  ActionIcon,
  Center,
} from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { useDisclosure } from '@mantine/hooks';
import { IconUser, IconShoppingBagPlus } from '@tabler/icons-react';
import Link from 'next/link';
import LogoKooben from '../../../../public/assets/svgs/LogoKooben';
import classes from './HeaderMegaMenu.module.css';
import { UserButton, useUser } from '@clerk/nextjs';
import { useCartStore } from '@/store';
import { ResponsiveContainer } from '../layouts';
import { KoobenLogoSVG } from '@/assets/svgs/KoobenLogo';

const mainLinks = [
  { link: '/', label: 'Inicio' },
  { link: '/catalogo', label: 'Catálogo' },
  { link: '/quienes-somos', label: 'Quiénes somos' },
  { link: '/contacto', label: 'Contacto' },
];

const adminLinks = [
  { link: '/producto', label: 'Producto' },
  { link: '/ordenes', label: 'Ordenes' },
  { link: '/usuarios', label: 'Usuarios' },
];

export const HeaderMegaMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const theme = useMantineTheme();
  const { isSignedIn, user } = useUser();
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const isAdmin = user?.publicMetadata?.role === 'admin';

  const [mounted, setMounted] = useState(false);

  // Memoize cart link to prevent unnecessary recalculations
  const cartLink = useMemo(
    () => ({
      link: totalItemsInCart === 0 && mounted ? '/carrito-vacio' : '/carrito',
      label: `Carrito ${mounted && totalItemsInCart > 0 ? `(${totalItemsInCart})` : ''}`,
    }),
    [totalItemsInCart, mounted]
  );

  const navigateToCart = () => {
    const cartPath = totalItemsInCart === 0 && mounted ? '/carrito-vacio' : '/carrito';
    router.push(cartPath);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const activeIndex = [...mainLinks, ...adminLinks].findIndex((link) => link.link === pathname);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [pathname]);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor
      key={`desktop-${item.label}`}
      component={Link}
      href={item.link}
      className={classes.mainLink}
      size={theme.fontSizes['2xl']}
      fw={300}
      c="brand.8"
      data-active={index === active || undefined}
      onClick={() => {
        setActive(index);
        closeDrawer();
      }}
    >
      {item.label}
    </Anchor>
  ));

  const adminItems = isAdmin
    ? adminLinks.map((item, index) => (
        <Anchor
          key={`admin-${item.label}`}
          component={Link}
          href={item.link}
          className={classes.mainLink}
          size={theme.fontSizes['2xl']}
          fw={300}
          c="brand.8"
          data-active={index + 4 === active || undefined}
          onClick={() => {
            setActive(index);
            closeDrawer();
          }}
        >
          {item.label}
        </Anchor>
      ))
    : null;

  const mainItemsDrawer = [...mainLinks, cartLink].map((item, index) => (
    <Anchor
      key={`drawer-${item.label}`}
      href={item.link}
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

  const adminItemsDrawer = [...(isAdmin ? adminLinks : [])].map((item, index) => (
    <Anchor
      key={`drawer-${item.label}`}
      href={item.link}
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
    <ResponsiveContainer>
      <header className={classes.header}>
        <Group justify="space-between" h="100%" gap="0px">
          <Flex justify="space-between" w="100%" align="center">
            <Box mt="xs">
              <KoobenLogoSVG className={classes.logo} />
            </Box>

            <Group visibleFrom="sm">
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Button
                  component={Link}
                  href="/sign-in"
                  variant="transparent"
                  size="md"
                  c="brand.8"
                  leftSection={<IconUser size={20} aria-hidden="true" />}
                >
                  <Text c="brand.9" fz="lg" fw={300}>
                    Iniciar sesión
                  </Text>
                </Button>
              )}

              <Button
                component={Link}
                href={cartLink.link}
                variant="transparent"
                size="md"
                c="brand.8"
                leftSection={<IconShoppingBagPlus size={20} aria-hidden="true" />}
              >
                <Text c="brand.8" fz="lg" fw={300}>
                  Carrito {mounted && totalItemsInCart > 0 && `(${totalItemsInCart})`}
                </Text>
              </Button>
            </Group>

            <Flex align="center" gap="xs" hiddenFrom="sm">
              <ActionIcon
                variant="subtle"
                color="brand.7"
                c="brand.8"
                onClick={navigateToCart}
                aria-label="Ver carrito"
              >
                <IconShoppingBagPlus size={24} />
              </ActionIcon>

              <Burger opened={drawerOpened} color="brand.8" onClick={toggleDrawer} />
            </Flex>
          </Flex>
          <Group
            gap={isAdmin ? 20 : 80}
            justify="flex-end"
            className={classes.mainLinks}
            visibleFrom="sm"
          >
            {mainItems}
            {isAdmin && (
              <>
                <Divider orientation="vertical" size="md" mt="" color="secondary.5" />
                {adminItems}
              </>
            )}
          </Group>
        </Group>
        <Divider size="md" mt={41} color="secondary.5" bg="red" />
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
        bg="brand.9"
      >
        <Box>
          <Divider mt="sm" size="md" color={theme.colors.secondary[6]} />
          <Flex justify="flex-start" direction="column" align="flex-start" mt="7xl">
            {mainItemsDrawer}
          </Flex>
          {isAdmin && (
            <>
              <Divider my="sm" size="md" color={theme.colors.secondary[6]} />

              <Flex justify="flex-start" direction="column" align="flex-start" mb="xl">
                {adminItemsDrawer}
              </Flex>
            </>
          )}

          <Divider mb="sm" size="md" color={theme.colors.secondary[6]} />

          <Flex
            justify="space-around"
            direction="column"
            align="center"
            pb="xl"
            px="md"
            mt={84}
            gap="xl"
          >
            <Button
              fz="md"
              c="white"
              color={theme.colors.brand[7]}
              component="a"
              w="50%"
              href="/sign-in"
            >
              Iniciar sesión
            </Button>
            <Button fz="md" variant="transparent" component="a" w="50%" href="/sign-up">
              Registrarse
            </Button>
          </Flex>
        </Box>
      </Drawer>
    </ResponsiveContainer>
  );
};
