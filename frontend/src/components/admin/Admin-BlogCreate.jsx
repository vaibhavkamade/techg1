import { useState } from "react";
import { useAuth } from "../auth/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import './AdminBlogCreate.css'

export const AdminBlogCreate = () => {
  const [data, setData] = useState({
    title: "",
    username: "",
    email: "",
    summary: "",
    content: "",
    cover: "",
  });

  const { authorizationToken } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/admin/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Blog created successfully");
        navigate("/admin/blogs");
      } else {
        toast.error("Failed to create blog");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="admin-blog-create-section">
      <div className="admin-blog-create-content-container">
        <h1 className="main-heading">Create Blog</h1>
      </div>
      <div className="admin-blog-create-container">
        <section className="admin-blog-create-form-section">
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
              <button type="submit" className="admin-btn btn-primary">Create</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
