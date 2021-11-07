/* eslint-disable import/prefer-default-export */
const INITIAL_STATE = {
  allCountriesArray: [],
  countrySearchedByUser: '',
  darkMode: false,
  FullInfo: [],
};

export const countriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'prueba':
      return { ...state, allCountriesArray: action.payload };
    case 'search':
      return { ...state, countrySearchedByUser: action.payload };
    case 'searchByRegion':
      return { ...state, allCountriesArray: action.payload };
    case 'darkmode':
      return { ...state, darkMode: action.payload };
    case 'searchFullInfo':
      return { ...state, FullInfo: action.payload };
    default: return state;
  }
};
