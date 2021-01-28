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
  const country = props.country
  const timezones = props.country.timezones.join(', ')

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
  
  return (
    <StyledCountrySearchSingleDescription>         
      <StyledHeading>{country.name}</StyledHeading>
      <StyledFlag src={country.flag} alt={`${country.name} flag`}/>
      <StyledCapitalText>{country.capital ? `capital: ${country.capital}` : ''}</StyledCapitalText>
      <MapboxGLMap country={props.country} />
      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-landmark"></StyledIcon>
          <span>ORGANISATIONS</span>
        </StyledSectionHeading>
        <ul>
          {country.regionalBlocs.map(org => (
            <li key={org.acronym}>
              {`${org.acronym} (${org.name})`}
            </li>
          ))}
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-globe-asia"></StyledIcon>
          <span>GEOGRAPHY</span>
        </StyledSectionHeading>
        <ul>
          <li>Region: { country.region }</li>
          <li>Subregion: { country.subregion }</li>
          <li>Borders: { convertBordersToString() }</li>
          <li>Timezones: { timezones }</li>
          <li>Land area: { `${formatThousands(country.area, ',')} km²` }</li>
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-dollar-sign"></StyledIcon>
          <span>ECONOMY</span>
        </StyledSectionHeading>
        <ul>
          <li>gini index: { country.gini }</li>
          <li>currencies: { convertCurrenciesToString() }</li>
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>
          <StyledIcon className="fas fa-users"></StyledIcon>
          <span>PEOPLE</span>
        </StyledSectionHeading>
        <ul>
          <li>population: { formatThousands(country.population, ',') }</li>
          <li>demonym: { country.demonym }</li>
          <li>languages: { convertLanguagesToString() }</li>
        </ul>
      </StyledSection>
    </StyledCountrySearchSingleDescription>
  )
}

export default CountrySearchSingleDescription