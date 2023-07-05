import { Select } from "@chakra-ui/react";
import { countries } from "../constants/countries";

interface CountryDropDown {
  onSelect: (country: string) => void;
}

export const CountryDropDown = ({ onSelect }: CountryDropDown) => {
  return (
    <Select
      onChange={(value: any) => {
        onSelect(value.target.value);
      }}
    >
      {countries.map((country: string) => {
        return <option value={country}>{country}</option>;
      })}
    </Select>
  );
};
