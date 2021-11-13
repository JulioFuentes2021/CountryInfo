/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CountryCards from '../components/CountryCards';
import { DarkThemeBody, LightTheme } from '../styles/LightAndDarkMode.style';
// import Loading from '../components/Loading';

const Index = () => {
  const onDarkMode = useSelector((store) => store.countries.darkMode);
  // const { loading } = useSelector((store) => store.countries);

  // if (loading) {
  //   return (
  //     <ThemeProvider theme={onDarkMode ? DarkThemeBody : LightTheme}>
  //       <Loading />
  //     </ThemeProvider>
  //   );
  // }

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
