/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CountryCards from '../components/CountryCards';
import { DarkThemeBody, LightTheme } from '../styles/LightAndDarkMode.style';

const Index = () => {
  const onDarkMode = useSelector((store) => store.countries.darkMode);

  return (
    <ThemeProvider theme={onDarkMode ? DarkThemeBody : LightTheme}>
      <Background>
        <Header />
        <CountryCards />
      </Background>
    </ThemeProvider>
  );
};

const Background = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
`;

export default Index;
