export function markupCountryInfo(country) {
  return `<div class="country">
    <div class="country-flag">
      <img src="${country.flags.svg}" alt="${
    country.name.official
  }" width="200"/>
      <p class="country-name"> ${country.name.official}</p>
    </div>
    <div class="country-info">
      <p class="country-capital">Capital: ${country.capital}</p>
      <p class="country-population">Population: ${country.population}</p>
      <p class="country-languages">Languages: ${Object.values(
        country.languages
      )}</p>
    </div>
  </div>`;
}
