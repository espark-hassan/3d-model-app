/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/coca_cola.glb 
Author: MemoRorschach (https://sketchfab.com/memororschach)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/coca-cola-bottle-34075fedb0ef40d9a172231134849914
Title: Coca Cola Bottle
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Pepsi = (props) => {
  const { nodes, materials } = useGLTF("public/models/Pepsi.glb");
  return (
    <group scale={0.2} position={[0, 0.31, -0.39]} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -2.71]} scale={1.256}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.43, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials["Material.001"]}
              position={[0.005, 0.191, -0.037]}
              rotation={[0.016, -0.135, 0.002]}
              scale={[1, 0.389, 1]}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/Pepsi.glb");

export default Pepsi;