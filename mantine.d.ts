import { MantineColorsTuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors =
  | 'brand'
  | 'brand-secondary'
  | 'neutral'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
