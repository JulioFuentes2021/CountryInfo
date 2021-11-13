import styled, { css, keyframes } from 'styled-components';

const delayOfTheBox1 = '-0.45s';
const delayOfTheBox2 = '-0.3s';
const delayOfTheBox3 = '-0.15s';

const LdsRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Ring = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
  width: 80px;
  height: 80px;
`;

export const RingPosition = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  ${({ isFullInfo }) => isFullInfo
    && css`
      height: 100vh;
      background-color: ${(props) => props.theme.backgroundColor};
  `}
`;

export const RingItems = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${LdsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${(props) => props.theme.color} transparent transparent transparent;

  ${({ isDarkModeBorder }) => isDarkModeBorder
    && css`
    border-color: #000 transparent transparent transparent;
  `}
  ${({ isBox1 }) => isBox1
    && css`
    animation-delay: ${delayOfTheBox1};
  `}

  ${({ isBox2 }) => isBox2
    && css`
    animation-delay: ${delayOfTheBox2};
  `}

  ${({ isBox3 }) => isBox3
    && css`
    animation-delay: ${delayOfTheBox3};
  `}
`;
