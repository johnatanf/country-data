import React from "react";
import CountryRankingOption from "../CountryRankingOption";
import CountryRankingItem from "../CountryRankingItem";
import CountryRankingNavigation from "../CountryRankingNavigation";
import formatThousands from "format-thousands";

const RankingsMode = (props) => {
  if (!props.option) {
    return (
      <>
        <CountryRankingOption
          iconClasses="fas fa-users"
          title="population"
          value="population"
          setOption={props.setOption}
        />
        <CountryRankingOption
          iconClasses="fas fa-globe-asia"
          title="land area"
          value="area"
          setOption={props.setOption}
        />
        <CountryRankingOption
          iconClasses="fas fa-dollar-sign"
          title="gini index"
          value="gini"
          setOption={props.setOption}
        />
      </>
    );
  } else {
    const option = props.option;
    let countries = props.countries;
    countries = countries.map(country => {
      return { ...country, gini: country.gini ? Object.values(country.gini)[0] : null}
    })

    const sortAscending = (a, b) => a[option] - b[option];
    const sortDescending = (a, b) => b[option] - a[option];

    const rankedCountries = countries
      .sort(props.order === "descending" ? sortDescending : sortAscending)
      .filter((country) => country[props.option]) // remove countries that don't have the statistic in question
      .slice(0, props.numberOfEntries);

    return (
      <>
        <CountryRankingNavigation
          statistic={props.option}
          setOption={props.setOption}
          numberOfEntries={props.numberOfEntries}
          setNumberOfEntries={props.setNumberOfEntries}
          order={props.order}
          setOrder={props.setOrder}
        />
        {rankedCountries.map((country, index) => {

          return (
            <CountryRankingItem
              key={index + 1}
              rank={index + 1}
              imgUrl={country.flags.png}
              imgAlt={`${country.name.common} flag`}
              countryName={country.name.common}
              statistic={`${formatThousands(country[props.option], ",")} ${
                option === "area" ? "km²" : ""
              }`}
              setMode={props.setMode}
              setSearch={props.setSearch}
            />
          );
        })}
      </>
    );
  }
};

export default RankingsMode;
