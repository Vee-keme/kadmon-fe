import { AdminSignup, Login, Signup } from "../pages";

const authRoutes = [
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin/signup",
    element: <AdminSignup />,
  },
];

export default authRoutes;
