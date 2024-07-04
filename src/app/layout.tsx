import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import { ColorSchemeScript, Flex, MantineProvider } from '@mantine/core';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import './globals.css';

export const metadata: Metadata = {
  title: "K'ooben",
  description:
    "En K'OOBEN, fabricamos muebles de alta calidad que combinan diseño y durabilidad, perfectos para embellecer y funcionalizar tu hogar. Como empresa familiar, nos enfocamos en la calidad, innovación y un servicio al cliente excepcional. Descubre nuestra colección y transforma tu casa en el hogar de tus sueños.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="es">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider>
            <Flex justify="center" h="100px" w="100%" bg="cyan">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Flex>

            {children}
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
