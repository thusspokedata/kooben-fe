import { Select } from "@mantine/core";

interface SizeSelectorProps {
    selectedSize?: string;
    availableSizes: string[];
  
    onSizeChanged: (size: string) => void;
  }
  
  export const SizeSelector = ({ selectedSize, availableSizes, onSizeChanged }: SizeSelectorProps) => {
    return (
      <Select
        label="Medidas:"
        placeholder="Elige la medida"
        data={availableSizes}
        value={selectedSize || null}
        onChange={(value) => {
          onSizeChanged(value || '');
        }}
        allowDeselect
      />
    );
  };