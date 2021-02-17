import './styles.css';
import {
  listCountriesRef,
  specificResultRef,
  inputRef,
} from './variables/variables.js';
import _debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js';

inputRef.addEventListener(
  'input',
  _debounce(event => {
    if (event.target.value) {
      listCountriesRef.innerHTML = '';
      specificResultRef.innerHTML = '';
      fetchCountries(event.target.value);
    }
  }, 500),
);
