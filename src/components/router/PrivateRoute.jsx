/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Loader from "../common/loader/Loader";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) return <Loader/>;
    if (user) return children;
    return (
        <div>
            <Navigate to="/login" state={{from: location}} replace></Navigate>
        </div>
    );
};

export default PrivateRoute;