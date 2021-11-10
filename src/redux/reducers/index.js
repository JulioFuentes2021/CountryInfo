/* eslint-disable import/prefer-default-export */
const INITIAL_STATE = {
  allCountriesArray: [],
  countrySearchedByUser: '',
  darkMode: false,
  FullInfo: [],
  loading: false,
  error: false,
  lastRegion: '',
};

export const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'prueba':
      return { ...state, allCountriesArray: action.payload };
    case 'loading':
      return { ...state, loading: action.payload };
    case 'error':
      return { ...state, error: action.payload };
    case 'search':
      return { ...state, countrySearchedByUser: action.payload };
    case 'searchByRegion':
      return { ...state, allCountriesArray: action.payload };
    case 'darkmode':
      return { ...state, darkMode: action.payload };
    case 'searchFullInfo':
      return { ...state, FullInfo: action.payload };
    case 'lastRegion':
      return { ...state, lastRegion: action.payload };
    case 'cleanCountrySearchedByUser':
      return { ...state, countrySearchedByUser: action.payload };
    default: return state;
  }
};
