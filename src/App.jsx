import React from "react";
import ContextProvider from "./contextProvider";
import DineInTable from "./components/DineInTable";
import "./styles.css";
import Random from "./components/Random";

const App = () => {
  return (
    <div className="h-[100vh] w-[100wh]">
      <ContextProvider>
        <DineInTable />
        {/* <Random /> */}
      </ContextProvider>
    </div>
  );
};

export default App;
