//lrc

import type { Metadata } from 'next';
import '@mantine/core/styles.css';

import { ColorSchemeScript, Flex, MantineProvider } from '@mantine/core';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useDisclosure } from '@mantine/hooks';

// import './globals.css';

export const metadata: Metadata = {
  title: "K'ooben",
  description:
    "En K'OOBEN, fabricamos muebles de alta calidad que combinan diseño y durabilidad, perfectos para embellecer y funcionalizar tu hogar. Como empresa familiar, nos enfocamos en la calidad, innovación y un servicio al cliente excepcional. Descubre nuestra colección y transforma tu casa en el hogar de tus sueños.",
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-red-500">
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
