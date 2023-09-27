import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { router } from "./components/router/router.jsx";
import { RouterProvider } from "react-router-dom";
import Context from "./Context/Context.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
        <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <ToastContainer />
      </AuthProvider>
      <App />
    </Context>
  </React.StrictMode>
);
