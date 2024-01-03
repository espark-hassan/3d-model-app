// MyProvider.js
import React, { useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [tableItems, setTableItems] = useState({
    dishes: "noodles",
    drinks: "",
    cigarette: false,
    person: 1,
  });

  return (
    <Context.Provider value={{ tableItems, setTableItems }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
