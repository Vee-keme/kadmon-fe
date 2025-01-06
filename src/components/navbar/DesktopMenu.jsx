import { ChevronDown, Link } from "lucide-react";

const DesktopMenu = ({ menu }) => {
  const hasSubMenu = menu.subMenu?.length > 0;
  return (
    <li>
      <span className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-black/5">
        {menu.name}

        {hasSubMenu && <ChevronDown className="mt-[0.6px]" />}
      </span>
    </li>
  );
};

export default DesktopMenu;
