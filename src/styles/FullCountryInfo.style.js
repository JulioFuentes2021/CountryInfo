/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FullInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  overflow: hidden;
  height: 80vh;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2,minmax(300px,1fr));
    grid-template-rows: repeat(1,minmax(300px,500px));
    gap: 3rem;
  }
`;

export const FlagConatiner = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
    max-height: 60vh;
    padding: 1rem;
  }
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1024) {
    flex-direction: row;
  }
`;

export const InfoSections = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export const InfoSectionsContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width:1024px) {
    flex-direction: row;
  }
`;

export const LanguagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width:1024px) {
    flex-direction: row;
  }
`;

export const LanguageItem = styled.div`
  border-radius: 2rem;
  padding: .5rem;
  width: 5rem;
  margin: 0 .3rem;
`;
