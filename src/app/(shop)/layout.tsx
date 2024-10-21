import type { Metadata } from 'next';
import '@mantine/core/styles.css';

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
  return <>{children}</>;
}
