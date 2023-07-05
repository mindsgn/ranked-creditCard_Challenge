import { Box, Text, Button } from "@chakra-ui/react";
import { countries } from "../constants/countries";
import { useCreditCard } from "../context/creditCard";
import { isCountryValid } from "../hooks/isCountryValid";

export const BannedCountries = () => {
  const { bannedCountries, addCountry, removeCountry } = useCreditCard();

  return (
    <Box>
      <Box padding={5} display="flex" flexDir={"row"} gap={2} flexWrap={"wrap"}>
        {bannedCountries.map((country) => {
          return (
            <Button
              background={"red.100"}
              onClick={() => {
                removeCountry(country);
              }}
            >
              <Text cursor="pointer">{country}</Text>
            </Button>
          );
        })}
      </Box>
      <Box padding={5} display="flex" flexDir={"row"} gap={2} flexWrap={"wrap"}>
        {countries.map((country) => {
          return (
            <Button
              display={
                isCountryValid(country, bannedCountries) ? "flex" : "none"
              }
              key={country}
              background={"green.100"}
              onClick={() => {
                addCountry(country);
              }}
            >
              <Text cursor="pointer">{country}</Text>
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
