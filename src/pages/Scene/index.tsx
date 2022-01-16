import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import './index.css';
import Box from './box';
import Block from './Block';
import NoiseData from './NoiseData';


export default function Scene() {

  return (
    <>
    {/* <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas> */}

    {/* <Block /> */}
    <NoiseData />
    </>
  );
}
