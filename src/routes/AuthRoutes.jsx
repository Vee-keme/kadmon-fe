import { Login, Signup } from "../pages";

const authRoutes = [
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default authRoutes;
