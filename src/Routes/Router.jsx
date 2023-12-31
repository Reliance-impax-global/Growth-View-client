import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ManagerAddEarning from "../Pages/manager/ManagerAddEarning";

const role = "admi";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute> {role === "admin" ? "admin" : <Home />}</PrivateRoute>
        ),
      },
      {
        path: "addearning",
        element:<ManagerAddEarning></ManagerAddEarning>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
