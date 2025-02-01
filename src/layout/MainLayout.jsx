import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/navbar/footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#11318C]">
        <Navbar />
      </header>

      <main className="flex-grow pt-16">
        <div className="max-w-screen-2xl mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
