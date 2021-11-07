/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
export const getCountries = () => async (dispatch) => {
  const url = 'http://restcountries.com/v2/all';
  const response = await fetch(url);
  const data = await response.json();
  console.log('Funcionando...');

  dispatch({
    type: 'prueba',
    payload: await data,
  });
};

export const updateCountries = (country) => (dispatch) => {
  dispatch({
    type: 'search',
    payload: country,
  });
};

export const searchByRegion = (region) => async (dispatch) => {
  let url;

  if (region === 'none') {
    url = 'http://restcountries.com/3.1/all';
  } else {
    url = `https://restcountries.com/v3/region/${region}`;
  }
  const response = await fetch(url);
  const data = await response.json();

  dispatch({
    type: 'searchByRegion',
    payload: data,
  });
};

export const updateDarkMode = () => (dispatch, getState) => {
  const { darkMode } = getState().countries;

  dispatch({
    type: 'darkmode',
    payload: !darkMode,
  });
};

export const showFullInfo = (country) => async (dispatch) => {
  const url = `https://restcountries.com/v2/name/${country}`;
  const response = await fetch(url);
  const data = await response.json();

  dispatch({
    type: 'searchFullInfo',
    payload: await data,
  });
};
