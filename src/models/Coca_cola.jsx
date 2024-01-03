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

const CocoCola = (props) => {
  const { nodes, materials } = useGLTF("/models/coca_cola.glb");
  return (
    <group
      visible={props.visible}
      position={[0, 0.5, -0.4]}
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3.034}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.CorcholataMesh_CorcholataSt_0.geometry}
            material={materials.CorcholataSt}
          />
          <mesh
            geometry={nodes.RefrescoMesh_RefrescoSt_0.geometry}
            material={materials.RefrescoSt}
          />
          <mesh
            geometry={nodes.BotellaMesh_BotellaSt_0.geometry}
            material={materials.BotellaSt}
          />
          <mesh
            geometry={nodes.EtiquetaMesh_EtiquetaBotellaSt_0.geometry}
            material={materials.EtiquetaBotellaSt}
          />
          <mesh
            geometry={nodes.waterDrop_GotasSt_0.geometry}
            material={materials.GotasSt}
          />
          <mesh
            geometry={nodes.waterDrop_GotasSt_0_1.geometry}
            material={materials.GotasSt}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/coca_cola.glb");

export default CocoCola;
