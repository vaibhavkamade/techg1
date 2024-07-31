import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../components/auth/auth";

export const Logout = () => {
    const { LogoutUser } = useAuth();
    useEffect(()=>{
        LogoutUser();
    }, [LogoutUser]);

  return <Navigate to="/login" />;
};
