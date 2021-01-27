import React from 'react'
import styled from 'styled-components'

const StyledCountryRankingNavigation = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
  align-items: center;
  font-family: Open Sans;
  padding: 0px 25px;
`

const StyledBackButton = styled.span`
  transition: background 0.5s;
  background: #212121;
  color: white;
  font-size: 1.25em;
  padding: 5px;

  &:hover {
    transition: background 0.5s;
    background: black;
    cursor: pointer;
  }
`

const StyledInput = styled.input`
  width: 50px;
  font-family: Open Sans;
  font-size: 1.25em;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const StyledDescription = styled.span`
  display: flex;
  font-family: Open Sans;
  font-weight: 800;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

const StyledOrder = styled.div`
  cursor: pointer;

  & > label {
    cursor: pointer;
  }

  .ascending {
    transform: rotate(0deg);
  }
`

const StyledIcon = styled.span`
  color: green;
  transform: rotate(180deg);
`

const CountryRankingNavigation = props => {
  const toggleOrder = () => {
    const finalOrder = props.order === 'ascending' ? 'descending' : props.order === 'descending' ? 'ascending' : ''
    props.setOrder(finalOrder)
  }
  
  return (
    <>
      <StyledDescription>Ranked by { props.statistic }</StyledDescription>
      <StyledCountryRankingNavigation>
        <StyledBackButton onClick={ () => props.setOption('') }>Back</StyledBackButton>
        <div>
          <label htmlFor='entries'>entries: </label>
          <StyledInput 
            id='entries' 
            type='number'
            value={ props.numberOfEntries } 
            onChange={ event => props.setNumberOfEntries(event.target.value) }
          />
        </div>
        <StyledOrder onClick={ toggleOrder }>
          <label>order: </label>
          <StyledIcon 
            className={`${props.order === 'ascending' ? 'ascending' : ''} fas fa-angle-double-up`}            
          >
          </StyledIcon>
        </StyledOrder>
      </StyledCountryRankingNavigation>
    </>
  )
}

export default CountryRankingNavigation