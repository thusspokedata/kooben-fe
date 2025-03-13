'use client';

import { Select } from '@mantine/core';
import { ProductSize } from '@/interfaces';

interface SizeSelectorProps {
  selectedSize?: string;
  availableSizes: string[];
  productSizes?: ProductSize[];
  onSizeChanged: (size: string) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  productSizes,
  onSizeChanged,
}: SizeSelectorProps): JSX.Element => {
  // Create select options based on available data
  let selectData = availableSizes.map((size) => ({ value: size, label: size }));

  // If we have product sizes with stock information, use that
  if (productSizes && productSizes.length > 0) {
    selectData = productSizes
      .filter((sizeInfo) => sizeInfo.stock > 0) // Only show sizes with stock
      .map((sizeInfo) => ({
        value: sizeInfo.size,
        label: `${sizeInfo.size}`,
      }));
  }

  return (
    <Select
      label="Medidas:"
      placeholder="Elige una medida"
      data={selectData}
      value={selectedSize || null}
      onChange={(value) => {
        onSizeChanged(value || '');
      }}
      allowDeselect
    />
  );
};
