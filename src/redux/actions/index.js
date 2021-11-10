/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */

export const getCountries = () => async (dispatch) => {
  dispatch({
    type: 'loading',
    payload: true,
  });

  dispatch({
    type: 'cleanCountrySearchedByUser',
    payload: '',
  });

  try {
    const url = 'http://restcountries.com/v2/all';
    const response = await fetch(url);
    const data = await response.json();

    dispatch({
      type: 'prueba',
      payload: await data,
    });
  } catch (error) {
    dispatch({
      type: 'error',
      payload: true,
    });
  }

  dispatch({
    type: 'loading',
    payload: false,
  });
};

export const updateCountries = (country) => (dispatch) => {
  dispatch({
    type: 'search',
    payload: country,
  });
};

export const searchByRegion = (region) => async (dispatch) => {
  dispatch({
    type: 'loading',
    payload: true,
  });

  dispatch({
    type: 'lastRegion',
    payload: region,
  });

  let url;

  if (region === 'none') {
    url = 'http://restcountries.com/v2/all';
  } else {
    url = `https://restcountries.com/v2/region/${region}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  console.log(region);

  dispatch({
    type: 'searchByRegion',
    payload: data,
  });

  dispatch({
    type: 'loading',
    payload: false,
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
  dispatch({
    type: 'loading',
    payload: true,
  });

  const url = `https://restcountries.com/v2/name/${country}`;
  const response = await fetch(url);
  const data = await response.json();

  dispatch({
    type: 'searchFullInfo',
    payload: await data,
  });

  dispatch({
    type: 'loading',
    payload: false,
  });
};
