import React from "react";
// import kadmon from "../../assets/kadmon.jpeg";
import MobMenu from "./MobMenu";
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navitems = [
    {
      item: "Services",
      subItems: ["Printing Services", "Graphics", "Custom order"],
    },
    {
      item: "Portfolio",
      subItems: [],
    },
    {
      item: "Order Online",
      subItems: [],
    },
    {
      item: "Why Kadmon",
      subItems: ["Success stories", "Reviews", "Job quality"],
    },
    {
      item: "Contact Us",
      subItems: ["Success stories", "Reviews", "Job quality"],
    },
  ];
  return (
    // <div className="fixed bg-blue-700 flex justify-between items-center gap-16 py-3 px-10 left-1/2 translate-x-[-50%] top-[20px] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10 border-2 border-blue-700 ">
    //   <img src={kadmon} alt="logo" className="w-10" />

    //   <ul className="flex gap-8 text-xl">
    //     <li>Services</li>
    //     <li>Graphics</li>
    //   </ul>

    //   <button className="bg-green-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold shadow-blue-500">
    //     Contact
    //   </button>
    // </div>
    <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
      <div>
        {/* <img src={logo} alt="logo" className="size-8" /> */}
        <p>LOGO</p>
      </div>

      {/* menus */}

      <ul className="lg:flex-center hidden gap-x-1">
        {Menus.map((menu) => (
          <DesktopMenu menu={menu} key={menu.name} />
        ))}
      </ul>

      <div className="flex-center  gap-x-5">
        <Link to="/auth/login">
          <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
            Sign In
          </button>
        </Link>
        <div className="lg:hidden ">
          <MobMenu Menus={Menus} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
