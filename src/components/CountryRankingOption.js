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

const StyledIcon = styled.i`
  color: #5c7cfa;
  flex-basis: 30px;
  text-align: center;
`

const CountryRankingOption = props => {
  return (
    <StyledCountryRankingItem onClick={() => props.setOption(props.value)}>
      <StyledIcon className={props.iconClasses}></StyledIcon>
      <p>{props.title}</p>
    </StyledCountryRankingItem>
  )
}

export default CountryRankingOption