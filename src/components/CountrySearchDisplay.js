import React from 'react'
import CountrySearchItem from './CountrySearchItem'
import CountrySearchSingleDescription from './CountrySearchSingleDescription'

const CountrySearchDisplay = props => {
  const filteredCountries = props.countries.filter(country => {
    return country.name.toLowerCase().includes(props.search.toLowerCase())
  })

  const borderCodes = props.countries.map(country => {
    return { [country.alpha3Code]: country.name }
  })

  if(filteredCountries.length === 1) {
    return <CountrySearchSingleDescription country={ filteredCountries[0] } borderCodes={ borderCodes }/> 
  }
  else if(filteredCountries.length <= 5) {
    return (
      <div>
        {filteredCountries.map(country => (
          <CountrySearchItem
            key={country.name}
            imgUrl={country.flag}
            imgAlt={`${country.name} flag`}
            countryName={country.name}
            setSearch={props.setSearch}
          />
        )
        )}
      </div>
    )
  } else {
    return null
  }
}

export default CountrySearchDisplay