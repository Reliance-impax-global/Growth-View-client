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
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";

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
        element: (
          <ManagerRoute>
            <ManagerAddEarning></ManagerAddEarning>
          </ManagerRoute>
        ),
      },
      {
        path: "addExpense",
        element: (
          <ManagerRoute>
            <ManagerAddExpense />
          </ManagerRoute>
        ),
      },
      {
        path: "earningRecord",
        element: (
          <ManagerRoute>
            <ManagerEarningRecord />
          </ManagerRoute>
        ),
      },
      {
        path: "adminEarningRecord",
        element: (
          <AdminRoute>
            <AdminEarningRecord />
          </AdminRoute>
        ),
      },
      {
        path: "expenseRecord",
        element: (
          <ManagerRoute>
            <ManagerExpenseRecord />
          </ManagerRoute>
        ),
      },
      {
        path: "adminExpenseRecord",
        element: (
          <AdminRoute>
            <AdminExpenseRecord />
          </AdminRoute>
        ),
      },
      {
        path: "addAsset",
        element: (
          <AdminRoute>
            <AddAsset />
          </AdminRoute>
        ),
      },
      {
        path: "availableAsset",
        element: (
          <AdminRoute>
            <AdminAvailableAssets />
          </AdminRoute>
        ),
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
