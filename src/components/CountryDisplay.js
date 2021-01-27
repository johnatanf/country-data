import React from 'react'
import CountryItem from './CountryItem'
import CountrySingleDescription from './CountrySingleDescription'

const CountryDisplay = props => {
  const filteredCountries = props.countries.filter(country => {
    return country.name.toLowerCase().includes(props.search.toLowerCase())
  })

  if(filteredCountries.length === 1) {
    return <CountrySingleDescription country={ filteredCountries[0] }/> 
  }
  else if(filteredCountries.length <= 5) {
    return (
      <div>
        {filteredCountries.map(country => (
          <CountryItem
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

export default CountryDisplay