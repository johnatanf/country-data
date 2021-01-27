import React from 'react'
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

export default CountryItem