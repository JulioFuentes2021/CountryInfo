/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import { getCountries } from '../redux/actions';
import { DarkThemeBody, LightTheme, DarkThemeHeader } from '../styles/LightAndDarkMode.style';
import {
  CardContainer,
  Card,
  TitleCard,
  FeatureCardContainer,
  FeatureCardItemTitle,
  FeatureContentContainer,
} from '../styles/components/CountryCards.style';

const CountryCards = () => {
  const { loading, error } = useSelector((store) => store.countries);
  const dispatch = useDispatch();
  const allCountries = useSelector((countries) => countries.countries.allCountriesArray);
  const countrySearched = useSelector((countries) => countries.countries.countrySearchedByUser);
  const countriesFiltered = allCountries.filter((item) => item.name.toLowerCase().includes(countrySearched.toLowerCase()));
  const onDarkMode = useSelector((store) => store.countries.darkMode);

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  if (loading) {
    return (
      <ThemeProvider theme={onDarkMode ? DarkThemeBody : LightTheme}>
        <Loading />
      </ThemeProvider>
    );
  }

  if (error) {
    return (
      <ThemeProvider theme={onDarkMode ? DarkThemeBody : LightTheme}>
        <Error />
      </ThemeProvider>
    );
  }

  return (
    <CardContainer>
      {countriesFiltered.map((item) => (
        <ThemeProvider key={item.name} theme={onDarkMode ? DarkThemeHeader : LightTheme}>
          <Link to={`/full/${item.name}`}>
            <Card>
              <img src={item.flag} alt="" />
              <TitleCard>{item.name}</TitleCard>
              <FeatureCardContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Population: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.population}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Region: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.region}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Capital: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.capital}</FeatureCardItemTitle>
                </FeatureContentContainer>
              </FeatureCardContainer>
            </Card>
          </Link>
        </ThemeProvider>
      ))}
    </CardContainer>

  );
};

export default CountryCards;
