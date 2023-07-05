import { NumberInput, NumberInputField } from "@chakra-ui/react";

interface CountryDropDown {
  onChange: (number: string) => void;
}

export const NumberOnlyInput = ({ onChange }: CountryDropDown) => {
  return (
    <NumberInput
      placeholder="Card Number"
      onChange={(value) => {
        onChange(value);
      }}
    >
      <NumberInputField />
    </NumberInput>
  );
};
