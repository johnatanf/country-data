import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  font-family: Concert One;
  padding: 10px 25px;
  font-size: 14px;
  background: #212121;
  color: white;
  border-radius: 0px 0px 10px 10px;
  text-align: center;
`

const StyledLink = styled.a`
  color: white;

  &:visited {
    color: white;
  }
`

const CardFooter = (props) => {
  return (
    <StyledFooter>
      Data source: REST COUNTRIES (<StyledLink href='https://restcountries.com/'>https://restcountries.com</StyledLink>)
    </StyledFooter>
  )
}

export default CardFooter