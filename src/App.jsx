import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Html,
  MeshDiscardMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Car from "./models/car";
import * as THREE from "three";
import { Box2 } from "three";
import { Sky } from "./models/Sky";

const App = () => {
  const [isTyres, setIsTyres] = useState(true);
  const [isGlass, setIsGlass] = useState(true);
  const [isBody, setIsBody] = useState(true);
  const [carColor, setCarColor] = useState("red");

  return (
    <section style={{ width: "100%", height: "100vh", position: "relative" }}>
      <button onClick={() => setIsTyres(!isTyres)}>
        {!isTyres ? "Add Interior" : "Remove Interior"}
      </button>
      <button onClick={() => setIsGlass(!isGlass)}>
        {!isGlass ? "Add Glass" : "Remove Glass"}
      </button>
      <button onClick={() => setIsBody(!isBody)}>
        {!isBody ? "Add Body" : "Remove Body"}
      </button>

      <form action="/action_page.php">
        <label for="colors">Choose a Color:</label>
        <select
          id="colors"
          name="colors"
          onChange={(e) => setCarColor(e.target.value)}
        >
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>
        </select>
      </form>
      <Canvas
        shadows
        style={{
          width: "100%",
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
          <spotLight />
          <hemisphereLight intensity={4} position={[0, 50, 0]} />
          <directionalLight
            intensity={0.54}
            position={[-8, 12, 8]}
            castShadow
            mapSize={new THREE.Vector2(1024, 1024)}
          />
          <Sky />
          <Car
            // position={[1, -10, -83]}
            scale={[0.1, 0.1, 0.1]}
            rotation={[0.1, 4.7, 0]}
            isTyresShow={isTyres}
            isGlassShow={isGlass}
            isBodyShow={isBody}
            carColor={carColor}
          />
          <Environment preset="dawn" background blur={0.6} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default App;
