import {
  OrbitControls,
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Stage,
  Shadow,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import Fan from "../models/Fan";

const Random = () => {
  const ref = useRef();
  useFrame((_, delta) => {
    // ref.current.rotation.y += 1 * delta;
    // ref.current.rotation.x += 0.1 * delta;
    // ref.current.position.y += 0.1 * delta;
    ref.current.rotation.y += 5 * delta;
  });

  return (
    <>
      {/* <Fan /> */}
      <ambientLight intensity={2.5} />
      <mesh ref={ref}>
        <boxGeometry />
        {/* <meshBasicMaterial color={"black"} wireframe /> */}
        <meshNormalMaterial flatShading color={"black"} wireframe />
      </mesh>
    </>
  );
};

export default Random;
