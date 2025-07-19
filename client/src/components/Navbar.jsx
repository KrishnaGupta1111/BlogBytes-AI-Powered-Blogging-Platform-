import React from "react";
import { assets } from "../assets/assets.js";

import { useAppContext } from "../context/AppContext.jsx";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img
          src={"/blogbytes_logo.svg"}
          alt="BlogBytes logo"
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
        <span className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          BlogBytes
        </span>
      </div>

      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer  bg-primary text-white px-10 py-2.5 "
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
