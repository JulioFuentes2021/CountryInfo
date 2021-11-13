import React from 'react';
import { RingPosition, Ring, RingItems } from '../styles/components/Loading.style';

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

export default Loading;
