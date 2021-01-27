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

  const option = props.option

  const sortByStatistic = (a, b) => b[option] - a[option]

  const rankedCountries = props.countries
    .sort(sortByStatistic)
    .filter(country => country[option]) // remove countries that don't have the statistic in question 
    .slice(0, 50)

  return (
    <>
      {rankedCountries.map((country, index) => 
        <CountryRankingItem 
          rank={ index+1 }
          imgUrl={ country.flag }
          imgAlt={`${ country.name } flag`}
          countryName={ country.name }
          statistic={ `${formatThousands(country[option] , ',')} ${option === 'area' ? 'km²' : ''}` }
        />
      )}
    </>
  )
}

export default RankingsMode