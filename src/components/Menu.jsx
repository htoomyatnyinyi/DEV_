import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pic from "./img/pizza.jpg";
import pic01 from "./img/pizza01.png";
import PizzaList from "./extra/PizzaList";
import { get_pizza } from "../redux/ducks/getPizzaSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.getpizza);
  console.log(data);

  useEffect(() => {
    dispatch(get_pizza());
  }, [dispatch]);

  const intro = "P L E A S E C H O O S E P I Z Z A F L V O U R";
  const pizzaType = "P O R K";
  const pizzaPrice = 8500;

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${pic})` }}
        className="flex text-white justify-between bg-cover p-2 "
      >
        <PizzaList
          intro={intro}
          img={pic01}
          pizza={pizzaType}
          price={pizzaPrice}
        />
        <div className="w-3/6 h-3/6">
          {/* <img src={pic} alt="pic" /> */}
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-red-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p> P O R K</p>
            <p>$ 8500 MMK</p>
          </div>
        </div>
        <div className="w-3/6 h-3/6">
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-blue-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p>S E A F O O D</p>
            <p>$ 9500 MMK</p>
          </div>
          {/* <img src={pic} alt="pic" /> */}
        </div>
        <div className="w-3/6 h-3/6">
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-red-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p>O T H E R</p>
            <p>$ 8500 MMK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
