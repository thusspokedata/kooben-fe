import { MantineColorsTuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors =
  | 'brand'
  | 'secondary'
  | 'tertiary'
  | 'neutral'
  | 'warning'
  | 'error'
  | 'success'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
