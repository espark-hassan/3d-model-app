/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/noodles.glb 
Author: ¡Jacques (https://sketchfab.com/iJacques)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ramen-noodles-2889104c361b43f39e6518932ca33dd3
Title: Ramen Noodles
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Noodles = (props) => {
  const { nodes, materials } = useGLTF("public/models/noodles.glb");
  return (
    <group
      position={[0, 0.5, 0]}
      scale={0.1}
      visible={props.visible}
      {...props}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Ramen_Bake}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Ramen_Bake}
        />
      </group>
    </group>
  );
};

useGLTF.preload("/noodles.glb");

export default Noodles;
