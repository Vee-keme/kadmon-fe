import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import logo from "./assets/kadmon.png";
import { Menus } from "./utils";
import DesktopMenu from "./components/navbar/DesktopMenu";
import MobMenu from "./components/MobMenu";

function App() {
  return (
    <>
      <div>
        <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#cbcbda]">
          <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
            <div>
              <img src={logo} alt="logo" className="size-8" />
            </div>

            {/* menus */}

            <ul className="lg:flex-center hidden gap-x-1">
              {Menus.map((menu) => (
                <DesktopMenu menu={menu} key={menu.name} />
              ))}
            </ul>

            <div className="flex-center gap-x-5">
              <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
                Sign In
              </button>
              <div className="lg:hidden">
                <MobMenu Menus={Menus} />
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
