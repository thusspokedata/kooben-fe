'use client';

import { Select } from '@mantine/core';

interface ColorSelectorProps {
  selectedColor?: string;
  availableColors: string[];
  onColorChanged: (color: string) => void;
}

export const ColorSelector = ({
  selectedColor,
  availableColors,
  onColorChanged,
}: ColorSelectorProps) => {
  // Convertir los colores disponibles al formato esperado por Select
  const selectData = availableColors.map((color) => ({
    value: color,
    label: color,
  }));

  return (
    <Select
      label="Colores:"
      placeholder="Elige un color"
      data={selectData}
      value={selectedColor || null}
      onChange={(value) => {
        onColorChanged(value || '');
      }}
      allowDeselect
    />
  );
};
