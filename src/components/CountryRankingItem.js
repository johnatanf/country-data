import React from 'react'
import styled from 'styled-components'

const StyledCountryRankingItem = styled.div`
  transition: background 0.5s;
  display: flex;
  align-items: center;
  padding: 25px;
  border-top: 1px solid black;
  background: #fafafa;
  gap: 20px;

  &:hover {
    transition: background 0.5s;
    background: #dcdcdc;
  }
`

const StyledRank = styled.span`
  font-weight: 800;
  color: #212121;
`

const StyledFlag = styled.img`
  width: 50px;
  flex-basis: auto;
`

const StyledCountryName = styled.span`
  flex-grow: 1;
`

const StyledStatistic = styled.span`
  flex-grow: 0;
  flex-basis: auto;
  text-align: right;
`

const CountryRankingItem = props => {
  return (
    <StyledCountryRankingItem>
      <StyledRank>{props.rank}</StyledRank>
      <StyledFlag src={props.imgUrl} alt={props.imgAlt} />
      <StyledCountryName>{props.countryName}</StyledCountryName>
      <StyledStatistic>{props.statistic}</StyledStatistic>
    </StyledCountryRankingItem>
  )
}

export default CountryRankingItem