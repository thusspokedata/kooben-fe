import { Container, ContainerProps } from '@mantine/core';
import { ReactNode } from 'react';

interface ResponsiveContainerProps extends Omit<ContainerProps, 'children'> {
  children: ReactNode;
}

/**
 * ResponsiveContainer - A standardized container component with responsive padding
 *
 * This component provides consistent padding across the application with responsive
 * adjustments for different screen sizes.
 *
 * @param {ReactNode} children - The content to be rendered inside the container
 * @param {ContainerProps} props - Additional props to pass to Mantine's Container component
 */
export function ResponsiveContainer({ children, ...props }: ResponsiveContainerProps) {
  return (
    <Container size="responsive" px={{ base: '20px', xs: '40px', lg: '120' }} {...props}>
      {children}
    </Container>
  );
}
