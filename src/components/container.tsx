import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import { CreditCardForm } from "./creditCardForm";
import { CreditCardTable } from "./creditCardTable";
import { BannedCountries } from "./bannedCountries";

export const HomeContainer = () => {
  return (
    <Container padding={10}>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Credit Card Form</Tab>
          <Tab>Credit Card List</Tab>
          <Tab>Banned Countries</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <CreditCardForm />
          </TabPanel>
          <TabPanel>
            <CreditCardTable />
          </TabPanel>
          <TabPanel>
            <BannedCountries />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
