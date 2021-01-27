import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: Concert One;
  font-size: 1.5em;
  background: #212121;
  width: 65%;
  min-width: 350px;
  max-width: 500px;
  padding: 25px 0;
  margin: 0 auto;
  color: white;

  .active {
    
    text-decoration: underline;
  }

  @media (max-width: 576px) {
    width: 100%; 
    max-width: none;
  }
`

const StyledLinks = styled.span`
  position: relative; 

  &:hover {
    cursor: pointer;
  }
`

const NavBar = props => {
  return (
    <StyledNav>
      <StyledLinks
        className={ `${ props.mode === 'search' ? 'active' : '' }` }
        onClick={ () => props.setMode('search') }
      >
        Search
      </StyledLinks>

      <StyledLinks
        className={ `${ props.mode === 'rankings' ? 'active' : '' }` }
        onClick={ () => props.setMode('rankings') }
      >
        Rankings
      </StyledLinks>
    </StyledNav>
  )
}

export default NavBar