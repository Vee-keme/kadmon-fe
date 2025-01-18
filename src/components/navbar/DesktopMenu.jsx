import { ChevronDown, Link } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const DesktopMenu = ({ menu }) => {
  const [isHover, setIsHover] = useState(false);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: "none",
    },
  };

  const toggleHoverMenu = () => {
    setIsHover(!isHover);
  };

  const hasSubMenu = menu.subMenu?.length > 0;
  return (
    <motion.li
      className="group/link"
      onHoverStart={toggleHoverMenu}
      onHoverEnd={toggleHoverMenu}
    >
      <span className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-black/5">
        {menu.name}

        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu text-black text-start"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`
              grid gap-7 
              ${
                menu.gridCols === 3
                  ? "grid-cols-3"
                  : menu.gridCols === 3
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }
            `}
          >
            {menu?.subMenu?.map((subMenu, i) => (
              <div key={i} className="relative cursor-pointer">
                <div className="flex-center gap-x-4 group/menubox">
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-[#083DAF] group-hover:text-gray-900 duration-300">
                    {subMenu?.icon && <subMenu.icon />}
                  </div>
                  <div>
                    <h6 className=" font-semibold">{subMenu?.name}</h6>
                    <p className="text-sm text-gray-400">{subMenu.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
};

export default DesktopMenu;
