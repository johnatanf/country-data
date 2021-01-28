import React, { useState } from 'react'
import CountryRankingOption from '../CountryRankingOption'
import CountryRankingItem from '../CountryRankingItem'
import CountryRankingNavigation from '../CountryRankingNavigation'
import formatThousands from 'format-thousands'

const RankingsMode = props => {  

  const [numberOfEntries, setNumberOfEntries] = useState(25)
  const [order, setOrder] = useState('ascending')

  if (!props.option) {
    return (
      <>
        <CountryRankingOption 
          iconClasses='fas fa-users'
          title='population'
          value='population'
          setOption={props.setOption}
        />
        <CountryRankingOption 
          iconClasses='fas fa-globe-asia'
          title='land area'
          value='area'
          setOption={props.setOption}
        />
        <CountryRankingOption 
          iconClasses='fas fa-dollar-sign'
          title='gini index'
          value='gini'
          setOption={props.setOption}
        />
      </>
    )
  } else {

    const option = props.option

    const sortAscending = (a, b) => a[option] - b[option]
    const sortDescending = (a, b) => b[option] - a[option]
  
    const rankedCountries = props.countries
      .sort(order === 'descending' ? sortDescending : sortAscending)
      .filter(country => country[option]) // remove countries that don't have the statistic in question 
      .slice(0, numberOfEntries)
  
    return (
      <>
        <CountryRankingNavigation
          statistic={ props.option }
          setOption={ props.setOption }
          numberOfEntries={ numberOfEntries }
          setNumberOfEntries={ setNumberOfEntries }
          order={ order }
          setOrder={ setOrder }
        />
        {rankedCountries.map((country, index) => 
          <CountryRankingItem 
            key={ index+ 1}
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
}

export default RankingsMode