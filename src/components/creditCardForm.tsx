import { Box, Heading, Input, Button, Text, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isCreditCardValid } from "../hooks/isCreditCardValid";
import { isCountryValid } from "../hooks/isCountryValid";
import { CountryDropDown } from "./countryDropDown";
import { NumberOnlyInput } from "./numberOnlyInput";
import { CardDetailsInterface } from "../interface/CardDetailsInterface";
import { useCreditCard } from "../context/creditCard";

export const CreditCardForm = () => {
  const { bannedCountries, addCard } = useCreditCard();
  const [cardDetails, setCardDetails] = useState<null | CardDetailsInterface>(
    null
  );

  const addNewCard = () => {
    if (
      cardDetails &&
      cardDetails.number &&
      cardDetails.country &&
      isCreditCardValid(cardDetails.number) &&
      isCountryValid(cardDetails.country, bannedCountries)
    ) {
      addCard(cardDetails);
    }
    console.log("card invalid");
  };

  return (
    <Box>
      <Box>
        <NumberOnlyInput
          onChange={(number) => {
            setCardDetails({
              ...cardDetails,
              number,
            });
          }}
        />
        <Input
          placeholder="MM/YY"
          onChange={(value) => {
            setCardDetails({
              ...cardDetails,
              date: value.target.value,
            });
          }}
        />
        <NumberOnlyInput
          onChange={(cvc) => {
            setCardDetails({
              ...cardDetails,
              cvc,
            });
          }}
        />
        <CountryDropDown
          onSelect={(country) => {
            setCardDetails({
              ...cardDetails,
              country,
            });
          }}
        />
        <Button onClick={() => addNewCard()}>
          <Text>Add Card</Text>
        </Button>
      </Box>
    </Box>
  );
};
