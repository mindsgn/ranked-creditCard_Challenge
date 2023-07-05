import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

interface dateInputInterface {
  onChange: (date: string) => void;
}

export const DateInput = ({ onChange }: dateInputInterface) => {
  return (
    <HStack>
      <PinInput
        onChange={(value) => {
          onChange(value);
        }}
      >
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};
