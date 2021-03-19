import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  font-family: "Open Sans";
  font-size: 1.25em;
  background: #212121;
  width: 65%;
  min-width: 350px;
  max-width: 500px;
  margin: 0 auto;
  color: white;
  border-radius: 0 0 5px 5px;
  overflow: hidden;

  .active {
    text-decoration: underline;
    background-color: #333;
  }

  @media (max-width: 576px) {
    width: 100%; 
    max-width: none;
    border-radius: 0;
  }
`

const StyledLink = styled.span`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 50%;
  padding: 12px 0;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const NavBar = props => {
  return (
    <StyledNav>
      <StyledLink
        className={ `${ props.mode === 'search' ? 'active' : '' }` }
        onClick={ () => props.setMode('search') }
      >
        Search
      </StyledLink>

      <StyledLink
        className={ `${ props.mode === 'rankings' ? 'active' : '' }` }
        onClick={ () => props.setMode('rankings') }
      >
        Rankings
      </StyledLink>
    </StyledNav>
  )
}

export default NavBar