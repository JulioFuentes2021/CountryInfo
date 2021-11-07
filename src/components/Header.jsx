import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import DarkModeManager from './DarkModeManager';
import { updateCountries, searchByRegion } from '../redux/actions';
import { DarkModeForButton, DarkThemeHeader, LightTheme } from '../styles/LightAndDarkMode.style';
import {
  HeaderSupreme,
  FilteredSection,
  FilterSectionContainer,
  FilterItem,
  SelectRegionsContainer,
  SelectRegions,
  Input,
} from '../styles/components/Header.style';

const Index = () => {
  const dispatch = useDispatch();
  const onDarkMode = useSelector((store) => store.countries.darkMode);

  const handleCountry = (e) => {
    dispatch(updateCountries(e.target.value));
  };

  const handleRegion = (e) => {
    dispatch(searchByRegion(e.target.value));
  };

  return (
    <ThemeProvider theme={onDarkMode ? DarkThemeHeader : LightTheme}>
      <HeaderSupreme>
        <DarkModeManager />
        <FilteredSection>
          <ThemeProvider theme={onDarkMode ? DarkModeForButton : LightTheme}>
            <FilterSectionContainer>
              <FilterItem>
                <FaSearch />
              </FilterItem>
              <FilterItem>
                <Input type="text" placeholder="Search for a country..." onChange={handleCountry} />
              </FilterItem>
            </FilterSectionContainer>
            <FilterSectionContainer isSelection>
              <SelectRegionsContainer onChange={handleRegion}>
                <SelectRegions value="none">None</SelectRegions>
                <SelectRegions value="africa">Africa</SelectRegions>
                <SelectRegions value="americas">America</SelectRegions>
                <SelectRegions value="asia">Asia</SelectRegions>
                <SelectRegions value="europe">Europa</SelectRegions>
                <SelectRegions value="oceania">Oceania</SelectRegions>
              </SelectRegionsContainer>
            </FilterSectionContainer>
          </ThemeProvider>
        </FilteredSection>
      </HeaderSupreme>
    </ThemeProvider>
  );
};

export default Index;
