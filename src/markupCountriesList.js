export function markupCountriesList(countries) {
  return countries
    .map(({ flags, name }) => {
      return `
            <li class="country-item">
            <img src="${flags.svg}" width="50"/> 
            <p class="country-name">${name.official}</p>
            </li>`;
    })
    .join('');
}
