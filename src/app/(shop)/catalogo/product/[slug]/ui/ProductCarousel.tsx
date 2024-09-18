import { Product } from '@/interfaces';
import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

export function ProductCarousel({ product }: { product: Product }) {
  const slides = product.images.map((image: string) => (
    <Carousel.Slide key={image}>
      <Image src={image} alt="product" width={200} height={200} />
    </Carousel.Slide>
  ));
  return (
    <Carousel withIndicators height={200} dragFree slideGap="md" align="start">
      {slides}
    </Carousel>
  );
}
