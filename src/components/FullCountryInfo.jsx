/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import DarkModeManager from './DarkModeManager';
import { showFullInfo } from '../redux/actions';
import { FullInfoContainer, FlagConatiner, InfoItems, InfoSections, InfoSectionsContainer } from '../styles/FullCountryInfo.style';
import { TitleCard, FeatureContentContainer, FeatureCardItemTitle } from '../styles/components/CountryCards.style';
import { DarkThemeHeader, LightTheme } from '../styles/LightAndDarkMode.style';

const FullCountryInfo = () => {
  const { country } = useParams();
  console.log(useParams);
  const dispatch = useDispatch();
  const prueba = useSelector((store) => store.countries.FullInfo);
  const onDarkMode = useSelector((store) => store.countries.darkMode);

  useEffect(() => {
    dispatch(showFullInfo(country));
    console.log(prueba);
  }, []);

  return (
    prueba.map((item) => (
      <ThemeProvider theme={onDarkMode ? DarkThemeHeader : LightTheme}>
        <DarkModeManager />
        <FullInfoContainer>
          <FlagConatiner>
            <img src={item.flag} alt="" />
          </FlagConatiner>
          <InfoItems>
            <TitleCard>{item.name}</TitleCard>
            <InfoSectionsContainer>
              <InfoSections>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Capital: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.capital}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Native Name: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.nativeName}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Numeric Code: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.numericCode}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Region: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.region}</FeatureCardItemTitle>
                </FeatureContentContainer>
              </InfoSections>
              <InfoSections>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Subregion : </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.subregion}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Independent: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.independent ? 'Yes' : 'No'}</FeatureCardItemTitle>
                </FeatureContentContainer>
                <FeatureContentContainer>
                  <FeatureCardItemTitle>Population: </FeatureCardItemTitle>
                  <FeatureCardItemTitle isContent>{item.population}</FeatureCardItemTitle>
                </FeatureContentContainer>
              </InfoSections>
            </InfoSectionsContainer>
          </InfoItems>
        </FullInfoContainer>
      </ThemeProvider>
    ))
  );
};

export default FullCountryInfo;
