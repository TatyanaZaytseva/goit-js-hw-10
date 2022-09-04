const BASE_URL = 'https://restcountries.com';
const endpoint = `/v3.1/name/${name}`;
const queryParams = `?fields=${'name'},${'capital'},${'flags'},${'population'},${'languages'}`;
const url = BASE_URL + endpoint + queryParams;

function fetchCountryByName(name) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error());
      }
      return response.json();
    })
    .then(data => {
      return data[0];
    });
}

export default { fetchCountryByName };
