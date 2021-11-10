import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Loading = () => (
  <RingPosition>
    <Ring>
      <RingItems isBox1 />
      <RingItems isBox2 />
      <RingItems isBox3 />
      <RingItems />
    </Ring>
  </RingPosition>
);

// color: ${(props) => props.theme.color};

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

const Ring = styled.div`
  display: inline-block;
  position: relative;
  margin: auto;
  width: 80px;
  height: 80px;
`;

const RingPosition = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const RingItems = styled.div`
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

export default Loading;
