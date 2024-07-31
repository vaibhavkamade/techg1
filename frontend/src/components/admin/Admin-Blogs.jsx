import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";


export const AdminBlogs = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllBlogsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/blogs", {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`blogs ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/blogs/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`blogs after delete: ${data}`);
      if (response.ok) {
        getAllBlogsData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBlogsData();
  }, [authorizationToken]);
  return (
    <>
      <section className="admin-blogs-section">
        <div className="admin-blogs-header-container">
          <h1>Admin Blogs Data </h1>
          <Link to="/admin/blogs/create" className="admin-btn btn-primary"><FaPlus className="icon" /> Create a Blog</Link>
        </div>
        <div className="container admin-blogs">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author(Name/Email)</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curBlog, index) => {
                return (
                  <tr key={index}>
                    <td>{curBlog.title}</td>
                    <td>{curBlog.username}/{curBlog.email}</td>
                    <td>
                      <Link to={`/admin/blogs/${curBlog._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button
                        className="delete-blog-btn"
                        onClick={() => deleteBlog(curBlog._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
