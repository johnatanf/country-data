import React from 'react'
import styled from 'styled-components'
import MapboxGLMap from './MapboxGLMap'
import formatThousands from 'format-thousands'

const StyledCountrySearchSingleDescription = styled.div`
  padding: 0px 25px 20px 25px;
  margin-top: 20px;
`

const StyledHeading = styled.h1`
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`

const StyledFlag = styled.img`
  display: block;
  width: 50%;
  margin: 20px auto;
  box-shadow: 1px 1px 3px #adadad;
`

const StyledCapitalText = styled.p`
  text-align: center;
`

const StyledSection = styled.section`
  margin: 30px 0;

  & > ul > li {
    margin: 10px 0;
  }
`

const StyledSectionHeading = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25em;
  font-weight: 600;
`

const StyledIcon = styled.i`
  color: #5c7cfa;
  width: 30px;
`

const CountrySearchSingleDescription = props => {
  const convertBordersToString = () => {
    const borderCodes = props.borderCodes
    let countryBorders = props.country.borders
    countryBorders = countryBorders.map(border => {
      return borderCodes.find(country => country[border])[border]
    })
    return countryBorders.join(', ')
  }
  
  const convertCurrenciesToString = () => {
    let resultArr = []
    for(let i = 0; i < props.country.currencies.length; i++) {
      resultArr = resultArr.concat(`${props.country.currencies[i].name} (${props.country.currencies[i].symbol})`)
    }
    return resultArr.join(', ')
  }

  const convertLanguagesToString = () => {
    let resultArr = []
    for(let i = 0; i < props.country.languages.length; i++) {
      resultArr = resultArr.concat(`${props.country.languages[i].name} (${props.country.languages[i].nativeName})`)
    }
    return resultArr.join(', ')
  }

  const countrySimplified = {
    capital: props.country.capital,
    flag: props.country.flag,
    organisations: {
      regionalBlocs: props.country.regionalBlocs
    },
    geography: {
      region: props.country.region,
      subregion: props.country.subregion,
      borders: convertBordersToString(),
      timezones: props.country.timezones.join(', '),
      area: props.country.area
    },
    economy: {
      gini: props.country.gini,
      currencies: convertCurrenciesToString()
    },
    people: {
      population: props.country.population,
      demonym: props.country.demonym,
      languages: convertLanguagesToString()
    }
  }

  console.log(countrySimplified)

  
  
  return (
    <StyledCountrySearchSingleDescription>         
      <StyledHeading>{countrySimplified.name}</StyledHeading>
      <StyledFlag src={countrySimplified.flag} alt={`${countrySimplified.name} flag`}/>
      <StyledCapitalText>{countrySimplified.capital ? `capital: ${countrySimplified.capital}` : ''}</StyledCapitalText>
      <MapboxGLMap country={props.country} />

      {
      countrySimplified.organisations.regionalBlocs.length 
      ?
      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-landmark"></StyledIcon>
          <span>ORGANISATIONS</span>
        </StyledSectionHeading>
        <ul>
          {countrySimplified.organisations.regionalBlocs.map(org => (
            <li key={org.acronym}>
              {`${org.acronym} (${org.name})`}
            </li>
          ))}
        </ul>
      </StyledSection>
      :
      null
      }

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-globe-asia"></StyledIcon>
          <span>GEOGRAPHY</span>
        </StyledSectionHeading>
        <ul>
          { countrySimplified.geography.region ? <li>Region: { countrySimplified.geography.region }</li> : null }
          { countrySimplified.geography.subregion ? <li>Subregion: { countrySimplified.geography.subregion }</li> : null }
          { countrySimplified.geography.borders ? <li>Borders: { convertBordersToString() }</li> : null }
          { countrySimplified.geography.timezones ? <li>Timezones: { countrySimplified.geography.timezones }</li> : null }
          { countrySimplified.geography.area ? <li>Land area: { `${formatThousands(countrySimplified.geography.area, ',')} km²` }</li> : null }
        </ul>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-dollar-sign"></StyledIcon>
          <span>ECONOMY</span>
        </StyledSectionHeading>
        <ul>
          { countrySimplified.economy.gini ? <li>Gini index: { countrySimplified.economy.gini }</li> : null }
          { countrySimplified.economy.currencies ? <li>Currencies: { convertCurrenciesToString() }</li> : null }
        </ul>
      </StyledSection>

      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-users"></StyledIcon>
          <span>PEOPLE</span>
        </StyledSectionHeading>
        <ul>
          { countrySimplified.people.population ? <li>Population: { formatThousands(countrySimplified.people.population, ',') }</li> : null }
          { countrySimplified.people.demonym ? <li>Demonym: { countrySimplified.people.demonym }</li> : null }
          { countrySimplified.people.languages ? <li>Languages: { convertLanguagesToString() }</li> : null }
        </ul>
      </StyledSection>
    </StyledCountrySearchSingleDescription>
  )
}

export default CountrySearchSingleDescription