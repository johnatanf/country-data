import axios from "axios";

const url = "https://restcountries.com/v3.1/all";

const getCountries = async () => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

export default { getCountries };
