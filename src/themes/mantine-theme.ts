import { createTheme, DEFAULT_THEME, mergeMantineTheme, rem } from '@mantine/core';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
      '#E6EEEF', // 0
      '#CCDCDE', // 1
      '#B3CBCE', // 2
      '#9ABABE', // 3
      '#80A9AD', // 4
      '#67979D', // 5
      '#568085', // 6
      '#45676B', // 7
      '#2A3F41', // 8
      '#202F31', // 9
    ],
    secondary: [
      '#EAF1EC', // 0
      '#D6E2D9', // 1
      '#C2D4C5', // 2
      '#ADC6B2', // 3
      '#99B79F', // 4
      '#6D9976', // 5
      '#5B8364', // 6
      '#4B6C52', // 7
      '#3B5441', // 8
      '#2B3D2F', // 9
    ],
    tertiary: [
      '#DAB005',
      '#BC990D',
      '#A08413',
      '#866F17',
      '#6D5C19',
      '#423918',
      '#2F2915',
      '#1E1A10',
      '#0F0D09',
      '#020202',
    ],
    neutral: [
      '#F9F9F9',
      '#DEDEDE',
      '#C9C9C9',
      '#B4B4B4',
      '#9F9F9F',
      '#8A8A8A',
      '#757575',
      '#606060',
      '#4C4C4C',
      '#373737',
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
