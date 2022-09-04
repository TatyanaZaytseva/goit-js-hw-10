import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import API from './fetchCountries.js';
import { countryMarkup } from './markupCountryInfo.js';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
  event.preventDefault();

  const input = event.target;
  const searchQuery = input.value.trim();

  API.fetchCountryByName(searchQuery)
    .then(renderCountryInfo)
    .catch(error => {
      refs.countryList.innerHTML = '';
      refs.countryInfo.innerHTML = '';
      onFetchError(error);
    });
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}

function renderCountryInfo(country) {
  const markup = countryMarkup(country);
  refs.countryInfo.innerHTML = markup;
}
