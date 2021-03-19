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
    background: #dcdcdc;
  }
`

const StyledIcon = styled.i`
  color: #5c7cfa;
  flex-basis: 30px;
  text-align: center;
`

const StyledInfoIcon = styled.i`
  position: relative;
  z-index: 10;
  color: #333;
  flex-basis: 30px;
  font-size: 20px;
  text-align: center;
  position: relative;
  transition: color .2s;

  &:hover {
    color: #000;
  }

  &:hover div {
    visibility: visible;
    opacity: 1;
  }
`

const StyledPopupInfo = styled.div`
  visibility: hidden;
  opacity: 0;
  text-align: left;
  width: 200px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  position: absolute;
  top: -15px;
  left: 35px;
  background: #fff;
  padding: 10px 20px;
  border: 3px solid rgba(0, 0, 0, .7);
  border-radius: 2px;
  transition: all .2s;

  @media only screen and (max-width: 600px) {
    top: 25px;
    left: 0;
    width: 150px;
    padding: 5px 10px;
  }
`

const StyledButton = styled.button`
  outline: none;
  border: 0;
  border-radius: 2px;
  padding: 5px 10px;
  background-color: #5c7cfa;
  font-family: "Open Sans", sans-serif;
  color: white;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  transition: background-color .1s;

  &:hover {
    cursor: pointer;
    background-color: #224efd;
  }
`

const CountryRankingOption = props => {
  return (
    <StyledCountryRankingItem >
      <StyledIcon className={props.iconClasses}></StyledIcon>
      <p>{props.title}</p>
      { 
      props.value === 'gini' 
      ? 

      <StyledInfoIcon className="fas fa-info-circle">
        <StyledPopupInfo>
        <p>Gini index is a measure of an economy's distribution of income. The higher the index, the more economically unequal the country is. For more information, <a href="https://databank.worldbank.org/metadataglossary/gender-statistics/series/SI.POV.GINI" target="_blank" rel="noreferrer">click here</a>.</p>
        </StyledPopupInfo>
      </StyledInfoIcon> 

      : null 

      }

      <StyledButton onClick={() => props.setOption(props.value)}>view</StyledButton>
    </StyledCountryRankingItem>
  )
}

export default CountryRankingOption