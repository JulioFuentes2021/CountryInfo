import React from 'react';
import { RingPosition, Ring, RingItems } from '../styles/components/Loading.style';

const LoadingFullInfo = () => (
  <RingPosition isFullInfo>
    <Ring>
      <RingItems isBox1 />
      <RingItems isBox2 />
      <RingItems isBox3 />
      <RingItems />
    </Ring>
  </RingPosition>
);

// color: ${(props) => props.theme.color};

export default LoadingFullInfo;
