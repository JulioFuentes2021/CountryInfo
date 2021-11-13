/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderSupreme = styled.div`
    background-color: ${(props) => props.theme.backgroundColor};
    transition: ${(props) => props.theme.transition};
`;

export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0rem 0rem .4rem 0 #000;
    /* border-bottom: 3px solid #000; */
    height: 20vh;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    transition: ${(props) => props.theme.transition};
`;

export const HeaderItemsContainer = styled.ul`
    display: flex;
    align-items: center;

    ${({ isMoon }) => isMoon
        && css`
        margin: 0 4rem 0 0;
    `}
`;

export const HeaderItems = styled.li`
    font-size: 1.1rem;
    list-style: none;
    margin: 0 4rem;
    cursor: pointer;

    ${({ isMoon }) => isMoon
        && css`
        margin:0 .5rem 0 0;
    `}
`;

export const FilteredSection = styled(HeaderContainer)`
    margin: 3rem 4rem;
    box-shadow: none;
    flex-direction: column;

    @media screen and (min-width:1024px) {
        flex-direction: row;
        margin: 1rem 0 0 0;
    }
`;

export const FilterSectionContainer = styled.div`
    display: flex;
    box-shadow: 0rem 0rem .2rem 0 #000;
    align-items: center;
    margin: 1rem 4rem;
    width: 100%;
    height: 3rem;
    background-color: ${(props) => props.theme.backgroundColor};

    @media screen and (min-width:1024px) {
        width: 30%;
    }
`;

export const FilterItem = styled.span`
    padding: 0 .5rem;
    & input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 1.1;
        cursor: pointer;
    }
`;

export const SelectRegionsContainer = styled.select`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
`;

export const SelectRegions = styled.option.attrs((props) => ({
  value: props.value,
}))`
    height: 100%;
`;

export const Input = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: props.type,
}))`
    background-color: inherit;
    color: ${(props) => props.theme.color};
    height: 100%;

    &::placeholder {
        color: ${(props) => props.theme.color};
    }
`;

export const Title = styled(Link)`
  color: ${(props) => props.theme.color};
  text-decoration: none;
`;
