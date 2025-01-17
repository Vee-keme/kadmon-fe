import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";

const MobMenu = ({ Menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDrawer} className="z-[999] relative">
        {isOpen ? <X /> : <Menu />}
      </button>

      <div className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#bcbcc3] backdrop-blur p-6 ">
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative "
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180 "}`}
                    />
                  )}
                </span>
                {subMenu && (
                  <ul>
                    {subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md cursor-pointer"
                      >
                        <Icon />
                        <span>{name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobMenu;
