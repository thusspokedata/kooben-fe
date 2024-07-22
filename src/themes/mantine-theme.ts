import { createTheme, DEFAULT_THEME, mergeMantineTheme, rem } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const selectConfig = {
  defaultProps: {
    checkIconPosition: 'right',
  },
};

const customMantineTheme = createTheme({
  // please add additional color names to 'mantine.d.ts' for reference as well
  colors: {
    brand: [
      '#e6eeef',
      '#ccdcde',
      '#b3cbce',
      '#9ababe',
      '#80a9ad',
      '#67979d',
      '#568085',
      '#45676b',
      '#2a3f41',
      '#202f31',
    ],
    'brand-secondary': [
      '#eaf1ec',
      '#d6e2d9',
      '#c2d4c5',
      '#adc6b2',
      '#99b79f',
      '#6d9976',
      '#5b8364',
      '#4b6c52',
      '#3b5441',
      '#2b3d2f',
    ],
    neutral: [
      '#d6d6d6',
      '#c1c0c0',
      '#aba9a9',
      '#969293',
      '#817c7c',
      '#6b6666',
      '#555051',
      '#3f3b3b',
      '#292626',
      '#131213',
    ],
  },
  primaryColor: 'brand',
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
    '2xl': '100em',
  },
  fontFamily: inter.style.fontFamily,
  components: {
    Tooltip: {
      defaultProps: {
        color: 'gray',
        withArrow: true,
      },
    },
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },
    Select: { ...selectConfig },
    MultiSelect: { ...selectConfig },
    Checkbox: {
      defaultProps: {
        radius: rem('4px'),
      },
    },
  },
  spacing: {
    '4xs': '0.25rem', // 4px / 16px = 0.25rem
    '3xs': '0.375rem', // 6px / 16px = 0.375rem
    '2xs': '0.5rem', // 8px / 16px = 0.5rem
    '2xl': '1.5rem', // 24px / 16px = 1.625rem
    '3xl': '1.625rem', // 26px / 16px = 1.625rem
    '4xl': '1.75rem', // 28px / 16px = 1.75rem
    '5xl': '1.875rem', // 30px / 16px = 1.875rem
    '6xl': '2.125rem', // 34px / 16px = 2.125rem
    '7xl': '2.25rem', // 36px / 16px = 2.125rem
    '8xl': '2.375rem', // 38px / 16px = 2.375rem
    '9xl': '2.75rem', // 44px / 16px = 2.75rem
    '10xl': '3rem', // 48px / 16px = 3rem
    '11xl': '3.375rem', // 54px / 16px = 3.375rem
    block: '1.625rem',
    section: '2.75rem',
  },
  fontSizes: {
    xs: '0.625rem', // 10px
    sm: '0.75rem', // 12px
    md: '0.875rem', // 14px
    lg: '1rem', // 16px
    xl: '1.25rem', // 20px
    '2xl': '1.375rem', // 22px
    '3xl': '1.5rem', // 24px
    '4xl': '1.625rem', // 26px / 16px = 1.625rem
    '5xl': '1.75rem', // 28px / 16px = 1.75rem
    '6xl': '1.875rem', // 30px / 16px = 1.875rem
    '7xl': '2rem', // 32px
    '8xl': '2.125rem', // 34px / 16px = 2.125rem
    '9xl': '2.25rem', // 36px
    '10xl': '2.375rem', // 38px
    '11xl': '2.75rem', // 44px
    '12xl': '3.5rem', // 56px
  },
  defaultRadius: 'md',
  radius: {
    '2xl': '1.5rem', // 24px
    '3xl': '2rem', // 32px
  },
});

// theme can be used outside of react via below method
export const theme = mergeMantineTheme(DEFAULT_THEME, customMantineTheme);
