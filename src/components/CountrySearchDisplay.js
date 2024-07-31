import React from "react";
import CountrySearchItem from "./CountrySearchItem";
import CountrySearchSingleDescription from "./CountrySearchSingleDescription";

const CountrySearchDisplay = (props) => {
  const filterCountries = () => {
    const singleCountry = props.countries.find((country) => {
      return country.name.common.toLowerCase() === props.search.toLowerCase();
    });

    if (singleCountry) {
      return [singleCountry];
    } else {
      return props.countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(props.search.toLowerCase());
      });
    }
  };

  const filteredCountries = filterCountries();

  const borderCodes = props.countries.map((country) => {
    return { [country.cca3]: country.name.common };
  });

  if (filteredCountries.length === 1) {
    return (
      <CountrySearchSingleDescription
        country={filteredCountries[0]}
        borderCodes={borderCodes}
      />
    );
  } else if (filteredCountries.length <= 5) {
    return (
      <div>
        {filteredCountries.map((country) => (
          <CountrySearchItem
            key={country.name.common}
            imgUrl={country.flags.png}
            imgAlt={`${country.name.common} flag`}
            countryName={country.name.common}
            setSearch={props.setSearch}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default CountrySearchDisplay;
