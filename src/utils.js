import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";
// import {
//   ChevronDown,
//   Bolt,
//   ShoppingBag,
//   BellDot,
//   BookOpenText,
//   BriefcaseBusiness,
//   CircleHelp,
//   TriangleAlert,
//   Users,
//   Lock,
//   Dessert,
//   ShieldPlus,
//   MessageCircle,
//   Images,
//   Figma,
//   Play,
//   MapPin,
//   Database,
//   PanelsTopLeft,
//   PanelTop,
// } from "lucide";

export const Menus = [
  {
    name: "Portfolio",
    subMenuHeading: ["Design", "Prints"],
    subMenu: [
      {
        name: "Design",
        desc: "Our Designs",
        icon: PanelsTopLeft,
      },
      {
        name: "Prints",
        desc: "Quality Prints",
        icon: Bolt,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Services",
    subMenuHeading: ["Printing Services", "Graphics", "Custom order"],
    subMenu: [
      {
        name: "Printing Services",
        desc: "Choose Service",
        icon: ShoppingBag,
      },
      {
        name: "Graphics",
        desc: "Make graphic",
        icon: MapPin,
      },
      {
        name: "Custom order",
        desc: "Customizations",
        icon: Play,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: BellDot,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: BookOpenText,
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: Figma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: BriefcaseBusiness,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];
