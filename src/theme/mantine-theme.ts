import { createTheme, DEFAULT_THEME, mergeMantineTheme, rem } from '@mantine/core';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
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
      '#E9F2FF',
      '#CCE0FF',
      '#85B8FF',
      '#579DFF',
      '#388BFF',
      '#1D7AFC',
      '#0C66E4',
      '#0055CC',
      '#09326C',
      '#082145',
    ],
    'light-neutral': [
      '#FFFFFF ',
      '#FAFBFC',
      '#F4F5F7',
      '#EBECF0',
      '#DFE1E6',
      '#C1C7D0',
      '#B3BAC5',
      '#A5ADBA',
      '#97A0AF',
      '#8993A4',
    ],
    'medium-neutral': [
      '#7A869A ',
      '#6B778C',
      '#5E6C84',
      '#505F79',
      '#42526E',
      '#344563',
      '#253858',
      '#172B4D',
      '#091E42',
      '#010F28',
    ],
    'dark-neutral': [
      '#42526e',
      '#344563',
      '#253858',
      '#172B4D',
      '#091E42',
      '#212937',
      '#1a212c',
      '#141921',
      '#0d1016',
      '#07080b',
    ],
    'warning-yellow': [
      '#FFF7D6',
      '#F8E6A0',
      '#F5CD47',
      '#E2B203',
      '#CF9F02',
      '#B38600',
      '#946F00',
      '#7F5F01',
      '#533F04',
      '#3D2E00',
    ],
    'danger-red': [
      '#FFEDEB',
      '#FFD2CC',
      '#FF9C8F',
      '#F87462',
      '#EF5C48',
      '#E34935',
      '#CA3521',
      '#AE2A19',
      '#601E16',
      '#391813',
    ],
    'success-green': [
      '#DFFCF0',
      '#BAF3DB',
      '#7EE2B8',
      '#4BCE97',
      '#2ABB7F',
      '#22A06B',
      '#1F845A',
      '#216E4E',
      '#164B35',
      '#133527',
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
  fontFamily: poppins.style.fontFamily,
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
