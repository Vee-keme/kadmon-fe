import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import logo from "./assets/kadmon.png";
import { Menus } from "./utils";
import DesktopMenu from "./components/navbar/DesktopMenu";
import MobMenu from "./components/navbar/MobMenu";
import Footer from "./components/navbar/footer/Footer";

import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import mainRoutes from "./routes/MainRoutes";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import authRoutes from "./routes/AuthRoutes";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: mainRoutes,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: authRoutes,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
