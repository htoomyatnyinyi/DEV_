import React from "react";
// import pic01 from "../img/pizza01.png";

const PizzaList = (props) => {
  console.log(props);
  const { img, intro, pizza, price } = props;
  return (
    <div className="w-3/6 h-3/6">
      {/* <img src={pic} alt="pic" /> */}
      <div className="font-bold bg-cyan-600 p-2 m-1 rounded-lg text-center  text-white bg-opacity-70 hover:bg-yellow-600 hover:bg-opacity-70">
        <h1>{intro}</h1>
        <img src={img} alt="logo" />
        <p>{pizza}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default PizzaList;
