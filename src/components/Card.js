import React from 'react'
import CardHeading from './CardHeading'
import CardFooter from './CardFooter'
import styled from 'styled-components'

const StyledCard = styled.div`
  box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 10px 10px 10px 10px;
  margin: 80px auto 35px auto;
  width: 65%;
  min-width: 350px;
  max-width: 500px;
  background: white;
`

const Card = props => {  
  return (
    <StyledCard>
      <CardHeading />
      <p>Content</p>
      <CardFooter />
    </StyledCard>
  )
}

export default Card