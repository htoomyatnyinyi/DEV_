import React from "react";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import pic from "./img/pizza.jpg";
import pic01 from "./img/pizza01.png";
import PizzaList from "./extra/PizzaList";
import { useSelector } from "react-redux";
// import { get_pizza } from "../redux/ducks/getPizzaSlice";

const Menu = () => {
  // const dispatch = useDispatch();

  const data = useSelector((state) => state.getpizza);
  console.log("all pizza list from database", data);

  // useEffect(() => {
  //   dispatch(get_pizza());
  // }, [dispatch]);

  const pizzaIntro = ["P L E A S E", "C H O O S E", "P I Z Z A", "F L V O U R"];
  // const pizzaType = ["P O R K", "S E A F O O D", "C H E E S E"];
  // const pizzaPrice = [8500, 8500, 8000];

  const PIZZA = {
    pizza_pork: {
      pizzaType: "P O R K",
      pizzaPrice: 8500,
    },
    pizza_seafood: {
      pizzaType: "S E A F O O D",
      pizzaPrice: 9000,
    },
    pizza_cheese: {
      pizzaType: "C H E E S E",
      pizzaPrice: 8000,
    },
    pizza_other: {
      pizzaType: "O T H E R",
      pizzaPrice: 8500,
    },
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${pic})` }}
        className="flex text-white justify-between bg-cover p-2 "
      >
        {/* {Object.values(data).map((e) => {
          const { ID, pizzaType, pizzaPrice } = e;
          return (
            <div key={ID}>
              <PizzaList
                // pizzaIntro={pizzaIntro}
                // img={pic01}
                pizzaType={pizzaType}
                pizzaPrice={pizzaPrice}
              />
            </div>
          );
        })} */}
        {/* {Object.values(PIZZA).map((e) => {
          return (
            <div>
              <PizzaList
                pizzaIntro={pizzaIntro}
                img={pic01}
                pizzaType={e.pizza_other.pizzaType}
                pizzaPrice={e.pizza_other.pizzaPrice}
              />
            </div>
          );
        })} */}
        <PizzaList
          pizzaIntro={pizzaIntro}
          img={pic01}
          pizzaType={PIZZA.pizza_other.pizzaType}
          pizzaPrice={PIZZA.pizza_other.pizzaPrice}
        />
        <PizzaList
          pizzaIntro={pizzaIntro}
          img={pic01}
          pizzaType={PIZZA.pizza_pork.pizzaType}
          pizzaPrice={PIZZA.pizza_pork.pizzaPrice}
        />
        <PizzaList
          pizzaIntro={pizzaIntro}
          img={pic01}
          pizzaType={PIZZA.pizza_seafood.pizzaType}
          pizzaPrice={PIZZA.pizza_seafood.pizzaPrice}
        />
        <PizzaList
          pizzaIntro={pizzaIntro}
          img={pic01}
          pizzaType={PIZZA.pizza_cheese.pizzaType}
          pizzaPrice={PIZZA.pizza_cheese.pizzaPrice}
        />
        {/* <div className="w-3/6 h-3/6">
          <img src={pic} alt="pic" />
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-red-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p> P O R K</p>
            <p>$ 8500 MMK</p>
          </div>
        </div> */}
        {/* <div className="w-3/6 h-3/6">
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-blue-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p>S E A F O O D</p>
            <p>$ 9500 MMK</p>
          </div>
          <img src={pic} alt="pic" />
        </div> */}
        {/* <div className="w-3/6 h-3/6">
          <div className="font-bold bg-slate-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-red-600 hover:bg-opacity-70">
            <h1>P L E A S E </h1>
            <h1>C H O O S E </h1>
            <h1>F L A V O U R</h1>
            <img src={pic01} alt="logo" />
            <p>O T H E R</p>
            <p>$ 8500 MMK</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Menu;
