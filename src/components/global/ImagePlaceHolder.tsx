import React, { CSSProperties } from 'react';
import { Flex, useMantineTheme, MantineSize } from '@mantine/core';
import PlaceHolderSVG from '@/assets/svgs/PlaceHolderSVG';

const ImagePlaceholder = ({
  iconWidth,
  borderRadius = 'md',
  newStyle,
}: {
  iconWidth?: number;
  borderRadius?: MantineSize | number;
  newStyle?: CSSProperties;
}) => {
  const theme = useMantineTheme();

  return (
    <Flex
      justify="center"
      align="center"
      h="100%"
      w="100%"
      style={{
        borderRadius: typeof borderRadius === 'number' ? borderRadius : theme.radius[borderRadius],
        ...newStyle,
      }}
    >
      <PlaceHolderSVG width={iconWidth} />
    </Flex>
  );
};

export default ImagePlaceholder;
