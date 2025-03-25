import React, { useState } from "react";
// import kadmon from "../../assets/kadmon.jpeg";
import MobMenu from "./MobMenu";
import DesktopMenu from "./DesktopMenu";
import { Menus } from "../../utils";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

import { ChevronDown, Menu, X, PersonStanding, UserRound } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState();

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

      {/* DISPLAY USER IMAGE AND PROFILE IF USER IS LOGGED IN */}

      <div className="flex items-center justify-center gap-x-5">
        <div className="lg:hidden ">
          <MobMenu Menus={Menus} />
        </div>

        {user ? (
          <div className="border-2 border-white rounded-full h-8 w-8 overflow-hidden cursor-pointer">
            {/* <UserRound className="h-auto w-full" /> */}
            {user && user?.imageUrl ? (
              <img
                src={user?.imageUrl}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center bg-gradient-to-t bg-blue-500/50 text-white text-lg font-semibold rounded-full"
                onClick={() => setOpen(!open)}
              >
                {user?.email ? (
                  user?.email[0].toUpperCase()
                ) : (
                  <UserRound className="h-auto w-full" />
                )}
              </div>
            )}

            {open && (
              <div className="absolute right-0 top-16 border-2 border-white bg-blue-600/80 w-fit p-2 rounded-md group-hover/menubox:bg-[#a7beef] group-hover:text-gray-900 duration-300 text-black">
                <p className="px-4 py-2 font-semibold">
                  {user?.email || user?.name || "Undefined"}
                </p>
                <button
                  onClick={() => navigate("/profile")}
                  className="block w-full px-4 py-2"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate("/settings")}
                  className="block w-full px-4 py-2"
                >
                  Settings
                </button>
                <button
                  onClick={() => navigate("/dashboard")}
                  className="block w-full px-4 py-2"
                >
                  Dashboard
                </button>
                <button
                  onClick={logout}
                  className="block w-full px-4 py-2 text-red-500 "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/auth/login">
            <button className="px-8 py-3 rounded-md flex-center bg-blue-600 hover:bg-blue-700 text-white">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
