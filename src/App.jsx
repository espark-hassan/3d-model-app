import React from "react";
import ContextProvider from "./contextProvider";
import DineInTable from "./components/DineInTable";
import "./styles.css";
import Random from "./components/Random";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div className="h-[100vh] w-[100wh]">
      <ContextProvider>
        <DineInTable />
        {/* <Canvas>
          <OrbitControls
            //   makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />

          <color attach={"background"} args={["#213547"]} />
          <Random />
        </Canvas> */}
      </ContextProvider>
    </div>
  );
};

export default App;
