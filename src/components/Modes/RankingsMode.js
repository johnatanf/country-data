import React from 'react'
import CountryRankingOption from '../CountryRankingOption'
import CountryRankingItem from '../CountryRankingItem'
import formatThousands from 'format-thousands'

const RankingsMode = props => {
  // return (
  //   <>
  //     <CountryRankingOption option='population'/>
  //     <CountryRankingOption option='land area'/>
  //     <CountryRankingOption option='gini index'/>
  //   </>
  // )

  const sortByStatistic = (a, b) => a.gini - b.gini

  const rankedCountries = props.countries
    .sort(sortByStatistic)
    .filter(country => country.gini)
    .slice(0, 50)

  return (
    <>
      {rankedCountries.map((country, index) => 
        <CountryRankingItem 
          rank={ index+1 }
          imgUrl={ country.flag }
          imgAlt={`${ country.name } flag`}
          countryName={ country.name }
          statistic={ formatThousands(country.gini , ',') }
        />
      )}
    </>
  )
}

export default RankingsMode