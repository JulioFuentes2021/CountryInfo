import React from 'react';
import styled from 'styled-components';

const Error = () => (
  <ErrorContent>
    Page not found. Try again later
  </ErrorContent>
);

const ErrorContent = styled.span`
    color: ${(props) => props.theme.color};
    font-size: clamp(3rem, 3vw, 6rem);
    width: 100%;
    display: inline-block;
    text-align: center;
`;

export default Error;
