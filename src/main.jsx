import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./components/router/router.jsx";
import { RouterProvider } from "react-router-dom";
import Context from "./Context/Context.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <App />
    </Context>
  </React.StrictMode>
);
