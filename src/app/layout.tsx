import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import './globals.css';

// const inter = Inter({ subsets: ['latin'] });

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
    <html lang="es">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
