export const isCountryValid = (country: string, bannedCountries: string[]) => {
  const lowercaseCountryName = country.toLowerCase();

  for (let i = 0; i < bannedCountries.length; i++) {
    const lowercaseCountry = bannedCountries[i].toLowerCase();

    if (lowercaseCountry === lowercaseCountryName) {
      return false;
    }
  }
  return true;
};
