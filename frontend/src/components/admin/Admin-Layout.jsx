import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaMessage, FaUser } from "react-icons/fa6";
import { FaHome, FaRegListAlt } from "react-icons/fa";
import { useAuth } from "../auth/auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("Admin Layout ", user);
    if (isLoading) {
        return <h1>Loading..</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/" />
    }
    return (
        <>
            {/* <header> */}
                <div className="admincontainer">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/admin/users"><FaUser /> Users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><FaMessage /> Contacts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/blogs"><FaRegListAlt /> Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><FaHome /> Home</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            {/* </header> */}
            <Outlet />
        </>
    );
};
