import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { isMobile } from "react-device-detect";
import MobileDeviceMsg from "./MobileDeviceMsg.jsx";

const smallWidth = window.innerWidth <= 700;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isMobile || smallWidth ? (
      <MobileDeviceMsg></MobileDeviceMsg>
    ) : (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    )}
  </React.StrictMode>
);
