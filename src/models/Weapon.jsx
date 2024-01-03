import React, { useRef, useEffect, useState } from "react";
import { MeshDiscardMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import isWeaponScene from "../assets/3d/Weapon.glb";
import isCarScene from "../assets/3d/Car.glb";
import { a } from "@react-spring/three";

const Weapon = (props) => {
  const { nodes, materials } = useGLTF(isWeaponScene);
  const caar = useGLTF(isCarScene);

  console.log(nodes, "materials");
  const isWeaponRef = useRef();

  return (
    <group animations {...props} dispose={null}>
      <group scale={14}>
        <group position={[-15.213, 10, 0]}>
          <mesh
            geometry={nodes.stockattach_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, -0.00592, 0]}
          />
          <mesh
            geometry={nodes.fireselect_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[15.09627, -0.00592, 0]}
          />
          <mesh
            geometry={nodes.magazene_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, props.isExplode ? -10.00592 : -0.00592, 0]}
          />
          <mesh
            geometry={nodes.trigger_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, 0, 0]}
          />
          <mesh
            geometry={nodes.thompsonupper_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, -0.00592, props.isExplode ? 10 : 0]}
          />
          <mesh
            geometry={nodes.reticle1_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, 0, 0]}
          />
          <mesh
            geometry={nodes.stock_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, -0.00592, props.isExplode ? -10 : 0]}
          />
          <mesh
            geometry={nodes.firepin1_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, 0, 0]}
          />
          <mesh
            geometry={nodes.mauserlower_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88451, 3.06759, 1.16968]}
          />
          <mesh
            geometry={nodes.firepin2_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, 0, 0.00721]}
          />
          <mesh
            geometry={nodes.magrelease_low2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.90793, 0, 0]}
          />
          <mesh
            geometry={nodes.polySurface26_lambert1_0.geometry}
            material={materials.lambert1}
            position={[11.88376, 0, 0]}
          />
          <mesh
            geometry={nodes.grip_low3_lambert1_0.geometry}
            material={materials.lambert1}
            position={[15.09627, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
};

export default Weapon;
