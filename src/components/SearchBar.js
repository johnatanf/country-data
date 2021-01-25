import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  font-family: Arial;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  padding: 15px 25px;
  border: 0;

  &:focus {
    outline: 2px solid lightgrey;
  }
`

const SearchBar = props => {
  return (
    <StyledInput 
      value={props.search}
      onChange={event => props.setSearch(event.target.value)}
      placeholder='Enter country...'
    />
  )
}

export default SearchBar