import React, { useContext } from "react";
import Context from "../context";

const Configurator = () => {
  const { tableItems, setTableItems } = useContext(Context);

  const configuresHandler = (name, value) => {
    setTableItems({ ...tableItems, [name]: value });
  };

  return (
    <div className="px-1 py-5 w-[20%]">
      <h1 className="text-center uppercase text-2xl">Configurator</h1>

      <div className="p-5  mt-4 ">
        <h2 className="uppercase text-xl">Dish</h2>
        <div className="mt-3 flex items-center flex-wrap">
          <span
            onClick={() => configuresHandler("dishes", "pizza")}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Pizza
          </span>
          <span
            onClick={() => configuresHandler("dishes", "chickenKabab")}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Chicken Kabab
          </span>
          <span
            onClick={() => configuresHandler("dishes", "noodles")}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Noodles
          </span>
        </div>
      </div>
      <div className="p-5 mt-4">
        <h2 className="uppercase text-xl">Drink</h2>
        <div className="mt-3 flex items-center flex-wrap">
          <span
            onClick={() => configuresHandler("drinks", "cocaCola")}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Coca Cola
          </span>
          <span
            onClick={() =>
              configuresHandler("cigarette", !tableItems.cigarette)
            }
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Cigarette
          </span>
          <span
            onClick={() => configuresHandler("drinks", "pepsi")}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            Pepsi
          </span>
        </div>
      </div>
      <div className="p-5 mt-4">
        <h2 className="uppercase text-xl">No. of Person</h2>
        <div className="mt-3 flex items-center flex-wrap">
          <span
            onClick={() => configuresHandler("person", 1)}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            1 Person
          </span>
          <span
            onClick={() => configuresHandler("person", 2)}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            2 Person
          </span>
          <span
            onClick={() => configuresHandler("person", 3)}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            3 Person
          </span>
          <span
            onClick={() => configuresHandler("person", 4)}
            className="bg-gray-200 px-5 text-sm p-1 m-1 rounded-md cursor-pointer"
          >
            4 Person
          </span>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
