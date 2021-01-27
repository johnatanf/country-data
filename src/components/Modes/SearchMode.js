import React from 'react'
import SearchBar from '../SearchBar'
import CountrySearchDisplay from '../CountrySearchDisplay'

const SearchMode = props => {
  return (
    <>
      <SearchBar
        search={props.search}
        setSearch={props.setSearch}
      />
      <CountrySearchDisplay 
        countries={props.countries}
        search={props.search}
        setSearch={props.setSearch}
      />
    </>
  )
}

export default SearchMode