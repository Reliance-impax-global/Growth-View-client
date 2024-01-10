import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ManagerAddEarning from "../Pages/manager/ManagerAddEarning";
import ManagerAddExpense from "../Pages/manager/ManagerAddExpense";
import ManagerEarningRecord from "../Pages/manager/ManagerEarningRecord";
import ManagerExpenseRecord from "../Pages/manager/ManagerExpenseRecord";
import HomeAdmin from "../Pages/Home/HomeAdmin";
import AddAsset from "../Pages/admin/AddAsset";
import AdminAvailableAssets from "../Pages/admin/AdminAvailableAssets";


const role = "admin";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            {role === "admin" ? <HomeAdmin /> : <Home />}
          </PrivateRoute>
        ),
      },
      {
        path: "addEarning",
        element: <ManagerAddEarning></ManagerAddEarning>,
      },
      {
        path: "addExpense",
        element: <ManagerAddExpense />,
      },
      {
        path: "earningRecord",
        element: <ManagerEarningRecord />,
      },
      {
        path: "expenseRecord",
        element: <ManagerExpenseRecord />,
      },
      {
        path: "addAsset",
        element: <AddAsset />,
      },
      {
        path: "availableAsset",
        element: <AdminAvailableAssets />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
