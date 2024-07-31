import React from "react";
import styled from "styled-components";
import MapboxGLMap from "./MapboxGLMap";
import formatThousands from "format-thousands";

const StyledCountrySearchSingleDescription = styled.div`
  padding: 0px 25px 20px 25px;
  margin-top: 20px;
`;

const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`;

const StyledFlag = styled.img`
  display: block;
  width: 50%;
  margin: 20px auto;
  box-shadow: 1px 1px 3px #adadad;
`;

const StyledCapitalText = styled.p`
  text-align: center;
`;

const StyledSection = styled.section`
  margin: 30px 0;

  & > ul > li {
    margin: 10px 0;
  }
`;

const StyledSectionHeading = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25em;
  font-weight: 600;
`;

const StyledIcon = styled.i`
  color: #5c7cfa;
  width: 30px;
`;

const CountrySearchSingleDescription = (props) => {
  const convertBordersToString = () => {
    const borderCodes = props.borderCodes;
    let countryBorders = props.country.borders;
    if (countryBorders) {
      countryBorders = countryBorders.map((border) => {
        return borderCodes.find((country) => country[border])[border];
      });
      return countryBorders.join(", ");
    } else {
      return "-";
    }
  };

  const convertCurrenciesToString = () => {
    let currencies = Object.values(props.country.currencies);
    let resultArr = [];
    for (let i = 0; i < currencies.length; i++) {
      resultArr = resultArr.concat(
        `${currencies[i].name} (${currencies[i].symbol})`
      );
    }
    return resultArr.join(", ");
  };

  const convertLanguagesToString = () => {
    let languages = Object.values(props.country.languages);
    let resultArr = [];
    for (let i = 0; i < languages.length; i++) {
      resultArr = resultArr.concat(languages[i]);
    }
    return resultArr.join(", ");
  };

  const countrySimplified = {
    capital: props.country.capital.join(" / "),
    flag: props.country.flags.png,
    geography: {
      region: props.country.region,
      subregion: props.country.subregion,
      borders: convertBordersToString(),
      timezones: props.country.timezones.join(", "),
      area: props.country.area,
    },
    economy: {
      gini: props.country.gini
        ? Object.values(props.country.gini)[0]
        : "Data not available",
      currencies: convertCurrenciesToString(),
    },
    people: {
      population: props.country.population,
      demonyms: `${
        props.country.demonyms.eng.m ? props.country.demonyms.eng.m : ""
      } ${
        props.country.demonyms.eng.f ? " / " + props.country.demonyms.eng.f : ""
      }`,
      languages: convertLanguagesToString(),
    },
  };

  return (
    <StyledCountrySearchSingleDescription>
      <StyledHeading>{countrySimplified.name}</StyledHeading>
      <StyledFlag
        src={countrySimplified.flag}
        alt={`${countrySimplified.name} flag`}
      />
      <StyledCapitalText>
        {countrySimplified.capital
          ? `capital: ${countrySimplified.capital}`
          : ""}
      </StyledCapitalText>
      <MapboxGLMap country={props.country} />

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-globe-asia"></StyledIcon>
          <span>GEOGRAPHY</span>
        </StyledSectionHeading>
        <ul>
          {countrySimplified.geography.region ? (
            <li>Region: {countrySimplified.geography.region}</li>
          ) : null}
          {countrySimplified.geography.subregion ? (
            <li>Subregion: {countrySimplified.geography.subregion}</li>
          ) : null}
          {countrySimplified.geography.borders ? (
            <li>Borders: {convertBordersToString()}</li>
          ) : null}
          {countrySimplified.geography.timezones ? (
            <li>Timezones: {countrySimplified.geography.timezones}</li>
          ) : null}
          {countrySimplified.geography.area ? (
            <li>
              Land area:{" "}
              {`${formatThousands(countrySimplified.geography.area, ",")} km²`}
            </li>
          ) : null}
        </ul>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-dollar-sign"></StyledIcon>
          <span>ECONOMY</span>
        </StyledSectionHeading>
        <ul>
          {countrySimplified.economy.gini ? (
            <li>Gini index: {countrySimplified.economy.gini}</li>
          ) : null}
          {countrySimplified.economy.currencies ? (
            <li>Currencies: {convertCurrenciesToString()}</li>
          ) : null}
        </ul>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-users"></StyledIcon>
          <span>PEOPLE</span>
        </StyledSectionHeading>
        <ul>
          {countrySimplified.people.population ? (
            <li>
              Population:{" "}
              {formatThousands(countrySimplified.people.population, ",")}
            </li>
          ) : null}
          {countrySimplified.people.demonyms ? (
            <li>Demonym: {countrySimplified.people.demonyms}</li>
          ) : null}
          {countrySimplified.people.languages ? (
            <li>Languages: {convertLanguagesToString()}</li>
          ) : null}
        </ul>
      </StyledSection>
    </StyledCountrySearchSingleDescription>
  );
};

export default CountrySearchSingleDescription;
