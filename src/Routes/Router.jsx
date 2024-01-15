import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ManagerAddEarning from "../Pages/manager/ManagerAddEarning";
import ManagerAddExpense from "../Pages/manager/ManagerAddExpense";
import ManagerEarningRecord from "../Pages/manager/ManagerEarningRecord";
import ManagerExpenseRecord from "../Pages/manager/ManagerExpenseRecord";

import AddAsset from "../Pages/admin/AddAsset";
import AdminAvailableAssets from "../Pages/admin/AdminAvailableAssets";
import ErrorPage from "../Shared/ErrorPage";
import AdminEarningRecord from "../Pages/admin/AdminEarningRecord";
import AdminExpenseRecord from "../Pages/admin/AdminExpenseRecord";

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
            <Home></Home>
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
        path: "adminEarningRecord",
        element: <AdminEarningRecord />,
      },
      {
        path: "expenseRecord",
        element: <ManagerExpenseRecord />,
      },
      {
        path: "adminExpenseRecord",
        element: <AdminExpenseRecord />,
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
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
