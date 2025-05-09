import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-blue-800 z-10">
        {/* bg-[#11318C] */}
        <Navbar />
      </header>

      <main className="flex-grow pt-20 mx-auto text-black w-full">
        <div className="max-w-screen-2xl mx-auto ">
          <Outlet />
        </div>
      </main>

      <div className="bg-blue-800">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
