/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tedpermana (https://sketchfab.com/tedpermana)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-car-chevrolet-c10-pickup-1963-679354c151984747bb74310ec5af8995
Title: Low Poly Car - Chevrolet C10 Pickup 1963
*/

import React, { useRef, useEffect, useState } from "react";
import { MeshDiscardMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import isCarScene from "../assets/3d/car.glb";
import { a } from "@react-spring/three";

const Car = (props) => {
  const { nodes, materials } = useGLTF(isCarScene);
  const { gl, viewport } = useThree();
  const isCarRef = useRef();

  console.log(materials, "materials");

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  return (
    <a.group ref={isCarRef} {...props} castShadow>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1} castShadow>
        {props.isGlassShow && (
          <mesh
            castShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Glass}
          ></mesh>
        )}
        {props.isBodyShow && (
          <mesh
            castShadow
            geometry={nodes.Object_4.geometry}
            material-color={props.carColor}
            material={materials.Body}
          ></mesh>
        )}
        {props.isTyresShow && (
          <mesh
            castShadow
            geometry={nodes.Object_3.geometry}
            material={materials.Interior}
          />
        )}
      </group>
    </a.group>
  );
};

// useGLTF.preload("/low_poly_car_-_chevrolet_c10_pickup_1963.glb");

export default Car;
