import React, { useContext } from "react";
import WineBottle from "../models/Wine_bottle_and_glass";
import CocoCola from "../models/Coca_cola";
import Context from "../context";
import Pepsi from "../models/Pepsi";

const Drinks = () => {
  const { tableItems, setTableItems } = useContext(Context);
  return (
    <>
      <WineBottle />
      <CocoCola visible={tableItems.drinks == "cocaCola"} />
      <Pepsi visible={tableItems.drinks == "pepsi"} />
    </>
  );
};

export default Drinks;
