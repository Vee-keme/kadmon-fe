import React from "react";
import { Outlet } from "react-router-dom";
import heroimg from "../assets/HeroImg.png";

const AuthLayout = () => {
  return (
    <main className="max-w-screen-2xl w-full h-screen overflow-hidden">
      <div className="w-full h-screen flex">
        <div className="w-[50%]">
          <Outlet />
        </div>

        <div className="w-[50%]">
          <img src={heroimg} alt="" className="object-cover" />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
