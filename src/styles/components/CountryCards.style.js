/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,min(250px));
    gap: 2rem;
    justify-content: center;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: ${(props) => props.theme.transition};
    padding: 2rem 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 25rem;
    background-color: #fff;
    box-shadow: .1rem 0 .3rem 0 #000;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    transition: ${(props) => props.theme.transition};

    & img {
        object-fit: cover;
        height: 50%;
    }
`;

export const TitleCard = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 1rem;
`;

export const FeatureCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`;

export const FeatureCardItemTitle = styled.span`
    font-weight: bold;

    ${({ isContent }) => isContent
    && css`
        font-weight: 400;
    `}
`;

export const FeatureContentContainer = styled.div`
    margin: .2rem 0;
`;
