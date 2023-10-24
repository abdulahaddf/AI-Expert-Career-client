import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxiosSecure from "./UseAxiousSecure";
import { AuthContext } from "../Context/AuthProvider";


const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const token = localStorage.getItem("access-token");
    
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['admin', user?.email],
        enabled :!loading && !!user?.email && !! token,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    console.log(isAdmin)
    return [isAdmin, isAdminLoading]
}
export default useAdmin;