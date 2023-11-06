/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../common/loader/Loader";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    Swal.fire("Please login first");
  }

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return (
    <div>
      <Navigate to="/login" state={{ from: location }} replace />
    </div>
  );
};

export default PrivateRoute;
