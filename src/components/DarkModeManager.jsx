import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer, HeaderItemsContainer, HeaderItems } from '../styles/components/Header.style';
import { updateDarkMode } from '../redux/actions';

const DarkModeManager = () => {
  const dispatch = useDispatch();
  const onDarkMode = useSelector((store) => store.countries.darkMode);

  return (
    <HeaderContainer>
      <HeaderItemsContainer>
        <HeaderItems>
          <h1>Where in the World?</h1>
        </HeaderItems>
      </HeaderItemsContainer>
      <HeaderItemsContainer isMoon onClick={() => dispatch(updateDarkMode())}>
        <HeaderItems isMoon>
          { onDarkMode ? <FaSun /> : <FaMoon /> }
        </HeaderItems>
        <HeaderItems isMoon>
          { onDarkMode ? 'LightMode' : 'DarkMode' }
        </HeaderItems>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default DarkModeManager;
