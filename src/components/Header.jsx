import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between p-2 bg-slate-300">
      <div>
        <h3 className="p-2">M I C R O L A B S</h3>
      </div>
      <div className="space-x-5">
        <Link to={"/"}>
          <button className="bg-slate-500 p-2 rounded-sm">Home</button>
        </Link>
        <Link to={"/menu"}>
          <button className="bg-slate-500 p-2 rounded-sm">Menu</button>
        </Link>
        <Link to={"/contacts"}>
          <button className="bg-slate-500 p-2 rounded-sm">Contacts</button>
        </Link>
        <Link to={"/dashboard"}>
          <button className="bg-slate-500 p-2 rounded-sm">Dashboard</button>
        </Link>
      </div>
      <div className="space-x-5">
        <Link to={"/cart"}>
          <button className="bg-green-500 p-2 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </Link>
        <Link to={"/profile"}>
          <button className="bg-red-500 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
