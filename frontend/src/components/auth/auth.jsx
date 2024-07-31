import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const authorizationToken = `Bearer ${token}`;
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;
    console.log("isLoggedIn", isLoggedIn);

    // tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    const userAuthentication = async () => {
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                },
            });
            if(response.ok){
                const data = await response.json();
                console.log("user data ", data.userData);
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.error("Error fetching user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error fetching user data");
        }
    };

    // to fetch the services from database

    const getBlogs = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/data/blogs", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken, // Include token if needed
                },
            });

            if (response.ok) {
                const data = await response.json();
                setBlogs(data.msg);
            } else {
                console.error("Error fetching blogs");
            }
        } catch (error) {
            console.error("Error fetching blogs", error);
        }
    };
    useEffect(()=>{
        getBlogs();
        userAuthentication();
    },[]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, blogs, authorizationToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return authContextValue;
}