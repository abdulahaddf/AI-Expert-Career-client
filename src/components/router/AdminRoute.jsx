/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import Loader from "../common/loader/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import UseUser from "../../hooks/useUser";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const [isAdmin, isAdminLoading] = useAdmin();
    const [userinfo] = UseUser();
    const isAdmin = userinfo?.role === "admin" || userinfo?.role === "super admin";
    const location = useLocation();

    if(loading && !userinfo && isAdmin) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;