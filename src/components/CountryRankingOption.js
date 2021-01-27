import React from 'react'
import styled from 'styled-components'

const StyledCountryRankingItem = styled.div`
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

const CountryRankingOption = props => {
  return (
    <StyledCountryRankingItem>
      <p>{props.option}</p>
    </StyledCountryRankingItem>
  )
}

export default CountryRankingOption