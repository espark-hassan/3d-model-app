import React, { useContext } from "react";
import Pizza from "../models/Pizza";
import Falafel from "../models/falafel";
import Context from "../context";
import Noodles from "../models/Noodles";

const Dishes = () => {
  const { tableItems, setTableItems } = useContext(Context);
  return (
    <>
      <Pizza visible={tableItems.dishes == "pizza"} />
      <Falafel visible={tableItems.dishes == "chickenKabab"} />
      <Noodles visible={tableItems.dishes == "noodles"} />
    </>
  );
};

export default Dishes;
