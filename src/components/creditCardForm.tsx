import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  Container,
  useToast,
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { isCreditCardValid } from "../hooks/isCreditCardValid";
import { isCountryValid } from "../hooks/isCountryValid";
import { CountryDropDown } from "./countryDropDown";
import { NumberOnlyInput } from "./numberOnlyInput";
import { CardDetailsInterface } from "../interface/cardDetailsInterface";
import { useCreditCard } from "../context/creditCard";
import { DateInput } from "./dateInput";

export const CreditCardForm = () => {
  const toast = useToast();
  const { bannedCountries, addCard } = useCreditCard();
  const [cardDetails, setCardDetails] = useState<null | CardDetailsInterface>(
    null
  );

  const addNewCard = () => {
    if (
      cardDetails &&
      cardDetails.number &&
      cardDetails.cvc &&
      cardDetails.expiryDate &&
      cardDetails.country &&
      isCreditCardValid(cardDetails.number) &&
      isCountryValid(cardDetails.country, bannedCountries)
    ) {
      addCard(cardDetails);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Failed To add Credit Card",
        description: "please Check if you have filled in all inputs",
        status: "error",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel paddingTop={10}>Credit Card Number</FormLabel>
          <NumberOnlyInput
            onChange={(number) => {
              setCardDetails({
                ...cardDetails,
                number,
              });
            }}
          />
          <FormLabel paddingTop={10}>Expiry Date(MM/YY)</FormLabel>
          <DateInput
            onChange={(expiryDate) => {
              setCardDetails({
                ...cardDetails,
                expiryDate,
              });
            }}
          />

          <FormLabel paddingTop={10}>CVC</FormLabel>
          <DateInput
            onChange={(cvc) => {
              setCardDetails({
                ...cardDetails,
                cvc,
              });
            }}
          />

          <FormLabel paddingTop={10}>Country</FormLabel>
          <CountryDropDown
            onSelect={(country) => {
              setCardDetails({
                ...cardDetails,
                country,
              });
            }}
          />
        </FormControl>
        <Button background={"green.100"} onClick={() => addNewCard()}>
          <Text>Add Card</Text>
        </Button>
      </Box>
    </Box>
  );
};
