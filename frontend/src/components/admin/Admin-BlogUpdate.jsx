import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { useAuth } from "../auth/auth";
import { toast } from "react-toastify";
import './AdminBlogUpdate.css'

export const AdminBlogUpdate = () => {
    const [data, setData] = useState({
        title: "",
        username: "",
        email: "",
        summary: "",
        content: "",
        cover: "",
    });

    const params = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    console.log("params single blog: ", params);
    const { authorizationToken } = useAuth();

    const getSingleBlogData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/blogs/${params.blogId}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`blogs single data:  ${data}`);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleBlogData();
    }, []);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/blogs/update/${params.blogId}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("Updated successfully");
                navigate("/blogs");
            } else {
                toast.error("Not Updated ");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="admin-blog-update-section">
            <div className="admin-blog-update-content-container">
                <h1 className="main-heading">Update Blog Data</h1>
            </div>
            <div className="admin-blog-update-container">
                <section className="admin-blog-update-form-section">
                    <form onSubmit={handleSubmit}>
                        <div className="admin-form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="off"
                                value={data.username}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={data.email}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="off"
                                value={data.title}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="summary">Summary</label>
                            <input
                                type="text"
                                name="summary"
                                id="summary"
                                autoComplete="off"
                                value={data.summary}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="cover">Cover Image URL</label>
                            <input
                                type="text"
                                name="cover"
                                id="cover"
                                autoComplete="off"
                                value={data.cover}
                                onChange={handleInput}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                name="content"
                                id="content"
                                autoComplete="off"
                                value={data.content}
                                onChange={handleInput}
                                required
                            ></textarea>
                        </div>

                        <div className="admin-form-group">
                            <button type="submit" className="admin-btn btn-primary">Update</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};
