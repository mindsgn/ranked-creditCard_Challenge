import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  TableCaption,
  Tbody,
  Td,
  Container,
  Box,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useCreditCard } from "../context/creditCard";
import { CardDetailsInterface } from "../interface/CardDetailsInterface";

export const CreditCardTable = () => {
  const { creditCardList, removeCard } = useCreditCard();
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Credit Card List</TableCaption>
          <Thead>
            <Tr>
              <Th>Credit Card Number</Th>
              <Th>CVC</Th>
              <Th>MM/YY</Th>
              <Th>Country</Th>
              <Th />
            </Tr>
          </Thead>
          {creditCardList.map((card: CardDetailsInterface) => {
            return (
              <Tbody>
                <Tr>
                  <Td>{card.number}</Td>
                  <Td isNumeric>{card.cvc}</Td>
                  <Td>{card.date}</Td>
                  <Td>{card.country}</Td>
                  <Td
                    onClick={() => {
                      removeCard(`${card.number}`);
                    }}
                  >
                    <Button>delete</Button>
                  </Td>
                </Tr>
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </Box>
  );
};
