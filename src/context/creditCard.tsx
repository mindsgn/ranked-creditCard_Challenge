import React, { useEffect, useState } from "react";
import { CardDetailsInterface } from "../interface/CardDetailsInterface";

interface CreditCardInterface {
  bannedCountries: string[] | null;
  creditCardList: CardDetailsInterface[] | null;
  addCard: (card: CardDetailsInterface) => void;
  removeCard: (number: string) => void;
  addCountry: (country: string) => void;
  removeCountry: (country: string) => void;
}

export const CreditCardContext = React.createContext<CreditCardInterface>({
  bannedCountries: [],
  creditCardList: [],
  addCard: (card: CardDetailsInterface) => {},
  removeCard: (number: string) => {},
  addCountry: (country: string) => {},
  removeCountry: (country: string) => {},
});

export const useCreditCard = () => React.useContext(CreditCardContext);

export const CreditCardProvider = ({ children }: { children: any }) => {
  const [creditCardList, setCreditCardList] = useState<CardDetailsInterface[]>(
    []
  );
  const [bannedCountries, setBannedCountries] = useState<string[]>([]);

  const addCard = (newCard: CardDetailsInterface) => {
    const exists = creditCardList.some(
      (card) => card.number === newCard.number
    );

    if (!exists) {
      setCreditCardList((prevArray) => [...prevArray, newCard]);
    }

    return null;
  };

  const removeCard = (number: string) => {
    const filteredCreditCardList = creditCardList.filter(
      (card) => card.number !== number
    );

    setCreditCardList(filteredCreditCardList);
  };

  const addCountry = (newCountry: string) => {
    const exists = bannedCountries.some((country) => country === newCountry);

    if (!exists) {
      setBannedCountries((prevArray) => [...prevArray, newCountry]);
    }

    return null;
  };

  const removeCountry = (countryToRemove: string) => {
    const filteredBannedCountries = bannedCountries.filter(
      (country) => country !== countryToRemove
    );

    setBannedCountries(filteredBannedCountries);
  };

  useEffect(() => {
    console.log(creditCardList);
    localStorage.setItem("cards", JSON.stringify(creditCardList));
  }, [creditCardList]);

  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(bannedCountries));
  }, [bannedCountries]);

  useEffect(() => {
    const cards = localStorage.getItem("cards");
    const country = localStorage.getItem("country");
    console.log(cards, country);

    if (cards) setCreditCardList(JSON.parse(cards));
    if (country) setBannedCountries(JSON.parse(country));
  }, []);

  return (
    <CreditCardContext.Provider
      value={{
        bannedCountries,
        creditCardList,
        addCard,
        removeCard,
        addCountry,
        removeCountry,
      }}
    >
      {children}
    </CreditCardContext.Provider>
  );
};
