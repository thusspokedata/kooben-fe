import { rem } from '@mantine/core';

interface CreditCardSVGProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number | string;
}

export function QualitySVG({ size, style, ...others }: CreditCardSVGProps) {
  return (
    <svg
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 54.3925C5.28 58.3625 0 66.3925 0 75.6625C0 97.2225 26.3 107.653 41.14 92.2525C60.14 72.5825 36.54 42.2825 13 54.3925ZM37.15 70.8225L22.15 85.8225C21.42 86.5625 20.45 86.9225 19.49 86.9225C18.52 86.9225 17.56 86.5525 16.83 85.8225L10.7 79.6925C9.23 78.2225 9.23 75.8325 10.7 74.3625C12.17 72.8925 14.56 72.8925 16.03 74.3625L19.49 77.8225L31.82 65.4925C33.29 64.0225 35.67 64.0225 37.15 65.4925C38.63 66.9625 38.63 69.3525 37.15 70.8225Z"
        fill="#2A3F41"
      />
      <path
        d="M63.869 2.1825C60.9491 -0.7275 56.229 -0.7275 53.3091 2.1825C30.8491 24.4825 18.0391 0.7925 18.0391 27.0725C18.0391 33.7325 18.8591 40.5825 20.4191 47.3425C43.5591 44.2125 62.5791 71.9825 46.8191 92.5325C49.7991 95.0425 52.979 97.3125 56.399 99.2225C57.759 99.9725 59.419 99.9725 60.769 99.2125C85.469 85.3525 99.1391 54.5625 99.1391 27.0625C99.1491 0.792505 86.3391 24.4825 63.869 2.1825Z"
        fill="#2A3F41"
      />
    </svg>
  );
}
