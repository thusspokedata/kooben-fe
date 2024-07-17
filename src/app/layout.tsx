import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css';
import { HeaderMegaMenu } from '@/components';
import { esMX } from '@clerk/localizations';

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
    <ClerkProvider localization={esMX}>
      <html lang="es">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider>
            <HeaderMegaMenu />
            {children}
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
