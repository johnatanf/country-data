import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  padding: 10px 25px;
  font-size: 14px;
  background: #212121;
  color: white;
  border-radius: 0px 0px 10px 10px;
  text-align: left;
`

const CardFooter = (props) => {
  return (
    <StyledFooter>
      Footer
    </StyledFooter>
  )
}

export default CardFooter