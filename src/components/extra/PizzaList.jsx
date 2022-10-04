import React from "react";
import { useState } from "react";
// import pic01 from "../img/pizza01.png";

const PizzaList = (props) => {
  const { img, pizzaIntro, pizzaType, pizzaPrice } = props;

  const [count, setCount] = useState(0);

  return (
    <div className="w-3/6 h-3/6">
      {/* <img src={pic} alt="pic" /> */}
      <div
        className="font-bold bg-cyan-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-yellow-600 hover:bg-opacity-70"
        // onDoubleClick={() => setCount(count + 1)}
      >
        <h1>
          {pizzaIntro[0]} <br /> {pizzaIntro[1]} <br /> {pizzaIntro[2]}
        </h1>
        <img src={img} alt="logo" />
        <button
          className="bg-slate-400 p-2 container bg-opacity-80"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <div className="bg-gray-500 p-2 bg-opacity-80 m-1">
          <p>{pizzaType}</p>
          <p>$ {pizzaPrice} MMK</p>
          <h2>Order: {count}</h2>
        </div>
        <button
          className="bg-slate-400 p-2 container bg-opacity-80"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        {/* <div className="p-2 bg-blue-500">
          <button
            className="bg-green-500 p-2 rounded-sm"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="bg-green-500 p-2 rounded-sm"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default PizzaList;
