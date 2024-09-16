import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { esMX } from '@clerk/localizations';
import { TanStackProvider } from '@/utils';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '@/themes/mantine-theme';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/charts/styles.css';
import './globals.css';
import { Footer, HeaderMegaMenu } from '@/components';

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
          {/* <link rel="icon" href="favicon.ico" sizes="any" /> */}
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <TanStackProvider>
              <HeaderMegaMenu />
              {children}
              <Footer />
            </TanStackProvider>
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
