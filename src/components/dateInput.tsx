import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

interface dateInputInterface {
  onChange: (date: string) => void;
  number?: number;
}

export const DateInput = ({ onChange, number = 4 }: dateInputInterface) => {
  const pinInputs = Array.from({ length: number }, (_, index) => index + 1);
  return (
    <HStack>
      <PinInput
        onChange={(value) => {
          onChange(value);
        }}
      >
        {pinInputs.map((x) => {
          return <PinInputField />;
        })}
      </PinInput>
    </HStack>
  );
};
