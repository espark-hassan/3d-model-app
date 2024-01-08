import React, { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { Box2 } from "three";
import { Sky } from "../models/Sky";
import Table from "../models/Table";

import Dish from "../models/falafel";
import WineBottle from "../models/Wine_bottle_and_glass";
import Spoons from "../models/Spoons";
import Configurator from "./Configurator";
import Dishes from "./Dishes";
import Drinks from "./Drinks";
import { Canvas, useFrame } from "@react-three/fiber";
import Chairs from "./Chairs";
import {
  Environment,
  Html,
  MeshDiscardMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

const DineInTable = () => {
  return (
    <section className="flex">
      <Canvas
        shadows
        style={{
          width: "80%",
          height: "100vh",
          background: "transparent",
        }}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense
          fallback={
            <Html>
              <h1>Loading...</h1>
            </Html>
          }
        >
          <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
          <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
          <color args={[0, 0, 0]} attach={"background"} />
          <ambientLight intensity={0.5} />
          <planeGeometry args={[30, 30]} />
          <MeshDiscardMaterial />
          {/* <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, 10, -10]}
          /> */}
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight intensity={4} position={[0, 50, 0]} />
          <directionalLight
            intensity={0.54}
            position={[-8, 12, 8]}
            castShadow
            mapSize={new THREE.Vector2(1024, 1024)}
          />
          {/* <Sky /> */}
          <Table />
          <Dishes />
          <Drinks />
          <Spoons />
          <Chairs />
          <Environment preset="night" background blur={1} />
        </Suspense>
      </Canvas>
      <Configurator />
    </section>
  );
};

export default DineInTable;
