import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Sky() {
  const sky = useGLTF(skyScene);

  return (
    <mesh scale={0.1}>
      <primitive object={sky.scene} />
    </mesh>
  );
}
