import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Extrude, OrbitControls, Center } from "@react-three/drei";

const extrudeSettings = { steps: 20, depth: 10, bevelEnabled: false };
const SIDE = 10;

const Block = () => {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
    <Canvas
      dpr={window.devicePixelRatio}
      camera={{ position: new THREE.Vector3(8, 5, 40) }}
    >
      <color attach="background" args={["#06092c"]} />
      <pointLight position={[-20, 10, 25]} />
      <gridHelper
        args={[100, 20, "#4D089A", "#4D089A"]}
        position={[0, 0, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Center>
      <Extrude args={[shape, extrudeSettings]}>
        <meshPhysicalMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
        //   @ts-ignore
          attenuationTint="#fff"
          attenuationDistance={0}
        />
      </Extrude>
      </Center>
      <OrbitControls autoRotate autoRotateSpeed={5} />
    </Canvas>
    </>
  );
}

export default Block;