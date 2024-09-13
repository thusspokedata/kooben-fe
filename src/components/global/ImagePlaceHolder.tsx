import React from 'react';
import { Flex, useMantineTheme, MantineSize } from '@mantine/core';
import PlaceHolderSVG from '@/assets/svgs/PlaceHolderSVG';

const ImagePlaceholder = ({
  iconWidth,
  borderRadius = 'md',
}: {
  iconWidth?: number;
  borderRadius?: MantineSize | number;
}) => {
  const theme = useMantineTheme();

  return (
    <Flex
      justify="center"
      align="center"
      h="100%"
      w="100%"
      style={{
        backgroundColor: 'var(--mantine-color-gray-2)',
        borderRadius: typeof borderRadius === 'number' ? borderRadius : theme.radius[borderRadius],
      }}
    >
      <PlaceHolderSVG width={iconWidth} />
    </Flex>
  );
};

export default ImagePlaceholder;
