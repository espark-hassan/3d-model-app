import {
  OrbitControls,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Stage,
  Shadow,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Random = () => {
  return (
    <>
      <Canvas>
        <OrbitControls
          //   makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />

        <color attach={"background"} args={["#213547"]} />

        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
};

export default Random;
