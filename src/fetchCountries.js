const BASE_URL = 'https://restcountries.com/v3.1/name';
const queryParams = `/${name}?fields=${'name'},${'capital'},${'flags'},${'population'},${'languages'}`;
const url = BASE_URL + queryParams;

function fetchCountryByName(name) {
  return fetch(url).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error());
    }
    return response.json();
  });
}

export default { fetchCountryByName };
