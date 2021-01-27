import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import Card from './components/Card'
import countriesServices from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [option, setOption] = useState('')

  useEffect(() => { // retrieve countries from api or from local storage 
    const retrieveCountries = async () => {
      const localStorageCountries = JSON.parse(localStorage.getItem('countries'))
      if(localStorageCountries && localStorageCountries.length === 250) { // check if local storage has the correct data 
        setCountries(JSON.parse(localStorage.getItem('countries')))
      } else {
        const countries = await countriesServices.getCountries()
        setCountries(countries)
        localStorage.setItem('countries', JSON.stringify(countries))
      }
    }

    retrieveCountries()
  }, [])
  
  return (
    <div>
      <NavBar />
      <Card 
        search={search}
        setSearch={setSearch}
        countries={countries}
        option={option}
        setOption={setOption}
      />
    </div>
  )
}

export default App;
