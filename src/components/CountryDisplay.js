import React from 'react'
import CountrySingleDescription from './CountrySingleDescription'
import styled from 'styled-components'

const StyledCountryItem = styled.div`
  transition: background 0.5s;
  display: flex;
  align-items: center;
  padding: 25px;
  border-top: 1px solid black;
  background: #fafafa;
  gap: 10px;

  &:hover {
    transition: background 0.5s;
    cursor: pointer;
    background: #dcdcdc;
  }
`

const StyledFlag = styled.img`
  width: 50px;
  flex-basis: auto;
`

const StyledCountryName = styled.span`
  flex-grow: 1;
  flex-basis: auto;
`

const CountryItem = props => {
  return (
    <StyledCountryItem onClick={() => props.setSearch(props.countryName.toLowerCase())}>
      <StyledFlag src={props.imgUrl} alt={props.imgAlt} />
      <StyledCountryName>{props.countryName}</StyledCountryName>
    </StyledCountryItem>
  )
}

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