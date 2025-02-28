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
      '#354f52', // 8
      '#202F31', // 9
    ],
    secondary: [
      '#eaf1ec', // 0
      '#d6e2d9', // 1
      '#c2d4c5', // 2
      '#adc6b2', // 3
      '#84a98c', // 4
      '#6d9976', // 5
      '#5b8364', // 6
      '#4b6c52', // 7
      '#3b5441', // 8
      '#2b3d2f', // 9
    ],
    tertiary: [
      '#dab005', // 0
      '#bc990d', // 1
      '#a08413', // 2
      '#866f17', // 3
      '#6d5c19', // 4
      '#423918', // 5
      '#2f2915', // 6
      '#1e1a10', // 7
      '#0f0d09', // 8
      '#020202', // 9
    ],
    neutral: [
      '#f9f9f9', // 0
      '#dedede', // 1
      '#c9c9c9', // 2
      '#b4b4b4', // 3
      '#9f9f9f', // 4
      '#8a8a8a', // 5
      '#757575', // 6
      '#606060', // 7
      '#4c4c4c', // 8
      '#373737', // 9
    ],
    warning: [
      '#ffcc6', // 0
      '#fff9cc', // 1
      '#fff399', // 2
      '#fff666', // 3
      '#ffe100', // 4
      '#ccb400', // 5
      '#998700', // 6
      '#665a00', // 7
      '#332d00', // 8
      '#1a1700', // 9
    ],
    error: [
      '#f8e9ea', // 0
      '#f2d3d4', // 1
      '#e5a6a9', // 2
      '#d77a7f', // 3
      '#ca4d54', // 4
      '#d2252d', // 5
      '#971a21', // 6
      '#711419', // 7
      '#260708', // 8
      '#000000', // 9
    ],
    success: [
      '#ddf2e1', // 0
      '#bbe6c3', // 1
      '#98d9a5', // 2
      '#76cd87', // 3
      '#54c069', // 4
      '#439a54', // 5
      '#32733f', // 6
      '#224d2a', // 7
      '#112615', // 8
      '#081130', // 9
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
    sm: '0.5rem', // 8px
    '2xl': '1.5rem', // 24px
    '3xl': '2rem', // 32px
  },
});

// theme can be used outside of react via below method
export const theme = mergeMantineTheme(DEFAULT_THEME, customMantineTheme);
