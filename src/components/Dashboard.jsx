import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_data } from "../redux/ducks/getDataSlice";
import FileUpload from "./extra/FileUpload";

const Dashboard = () => {
  const dispatch = useDispatch();

  const f_data = useSelector((state) => state.getdata);
  // console.log(f_data);

  const onGetData = () => {
    console.log("Start Get Data from DATABASE");
    const a = dispatch(get_data("Payload is Here"));
    console.log(a);
  };

  return (
    <div className="block">
      {/* <div className="bg-green-300 p-2 rounded-md">
        <h3>Main Sections</h3>
      </div> */}
      <FileUpload />
      <div className="bg-slate-500 p-2 rounded-md">
        <h3 className="align-self-start">DASHBOARD</h3>
        <div>
          <p>GET DATA FROM DATABASES</p>
          <button onClick={onGetData} className="bg-slate-400 p-2 rounded-md">
            GET
          </button>
          {Object.values(f_data).map((e) => {
            return (
              <div key={e.id}>
                <div className="flex bg-cyan-500 p-2 m-5 rounded-md shadow-2xl">
                  <div>
                    <h3>{e.name}</h3>
                    <h3>{e.phone}</h3>
                    <h3>{e.address}</h3>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
