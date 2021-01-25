import React from 'react'
import styled from 'styled-components'

const StyledCountrySingleDescription = styled.div`
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
  margin: 15px 0;
`

const StyledSectionHeading = styled.h2`
  font-size: 1.25em;
  font-weight: 600;
`

const CountrySingleDescription = props => {
  const country = props.country
  const borders = props.country.borders.join(', ')
  const timezones = props.country.timezones.join(', ')
  
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
    <StyledCountrySingleDescription>      
      <StyledHeading>{country.name}</StyledHeading>
      <StyledFlag src={country.flag} alt={`${country.name} flag`}/>
      <StyledCapitalText>{country.capital ? `capital: ${country.capital}` : ''}</StyledCapitalText>
      <StyledSection>
        <StyledSectionHeading>organisations</StyledSectionHeading>
        <ul>
          {country.regionalBlocs.map(org => (
            <li key={org.acronym}>
              {`${org.acronym} (${org.name})`}
            </li>
          ))}
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>geography</StyledSectionHeading>
        <ul>
          <li>region: { country.region }</li>
          <li>subregion: { country.subregion }</li>
          <li>borders: { borders }</li>
          <li>timezones: { timezones }</li>
          <li>land area: { country.area }</li>
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>economy</StyledSectionHeading>
        <ul>
          <li>gini index: { country.gini }</li>
          <li>currencies: { convertCurrenciesToString() }</li>
        </ul>
      </StyledSection>
      <StyledSection>
        <StyledSectionHeading>people</StyledSectionHeading>
        <ul>
          <li>population: { country.population }</li>
          <li>demonym: { country.demonym }</li>
          <li>languages: { convertLanguagesToString() }</li>
        </ul>
      </StyledSection>
    </StyledCountrySingleDescription>
  )
}

export default CountrySingleDescription