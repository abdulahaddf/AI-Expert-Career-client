import { useContext } from "react";


import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Context/AuthProvider";

const UseUser = () => {
  const { user } = useContext(AuthContext);
  const {
    data: userinfo = null,
    isLoading,
    refetch,
  } = useQuery([user, "userinfo"], async () => {
    const res = await fetch(
      `http://localhost:5000/userinfo/?email=${user?.email}`
    );
    return res.json();
  });
  return [userinfo, isLoading, refetch];
};
export default UseUser;
