import listTemplCountries from '../templates/listSearch.hbs';
import successTemplCountry from '../templates/successTemplCountry.hbs';
import error from './pnotify.js';
import { listCountriesRef, specificResultRef } from '../variables/variables.js';

const fetchCountries = function (country) {
  fetch(
    `https://restcountries.eu/rest/v2/name/${country}?fields=name;capital;languages;population;flag`,
  )
    .then(response => response.json())
    .then(data => {
      if (data.length === 1) {
        const markup = successTemplCountry(data);
        return specificResultRef.insertAdjacentHTML('beforeend', markup);
      }
      if (data.length <= 10) {
        const markup = listTemplCountries(data);
        return (listCountriesRef.innerHTML = markup);
      }
      if (data.length) {
        return error();
      }
    })
    .catch(() => alert('Something went wrong... Try again!'));
};

export default fetchCountries;
