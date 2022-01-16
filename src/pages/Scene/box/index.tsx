import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import '../index.css';

const Box = (props: any) => {
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    //   @ts-ignore
    mesh.current.rotation.x = mesh.current.rotation.y += 0.04
  });
  // draw the box
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#FFAE00" />
    </mesh>
  );
}

export default Box;