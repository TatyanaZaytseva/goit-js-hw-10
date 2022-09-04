import './css/styles.css';
import Notiflix from 'notiflix';
import _debounce, { debounce } from 'lodash.debounce';
import API from './fetchCountries.js';
import { markupCountry } from './markupCountryInfo.js';
import { markupCountriesList } from './markupCountriesList.js';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener(
  'input',
  _debounce(onSearchCountry, DEBOUNCE_DELAY)
);

function onSearchCountry(event) {
  event.preventDefault();

  const input = event.target;
  const searchQuery = input.value.trim();

  API.fetchCountryByName(searchQuery)
    .then(renderCountryCard)
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
  const markup = markupCountry(country);
  refs.countryInfo.innerHTML = markup;
}

function renderCountriesList(country) {
  const markupList = markupCountriesList(country);
  refs.countryList.innerHTML = markupList;
}

function renderCountryCard(countries) {
  if (countries.length === 1) {
    refs.countryList.innerHTML = '';
    const countryCard = renderCountryInfo(countries);
    refs.countryInfo.innerHTML = countryCard;
  } else if (countries.length <= 10) {
    refs.countryInfo.innerHTML = '';
    const markupList = renderCountriesList(countries);
    refs.countryList.innerHTML = markupList;
  } else
    Notiflix.Notify.failure(
      'Too many matches found. Please enter a more specific name.'
    );
}
