import axios from 'axios'

const url = 'https://restcountries.eu/rest/v2/all'

const getCountries = async () => {
  const response = await axios.get(url)
  const data = response.data
  return data
}

export default { getCountries }