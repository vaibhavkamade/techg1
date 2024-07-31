import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/auth';

const BlogDetail = () => {
    const [data, setData] = useState({
        title: "",
        username: "",
        email: "",
        summary: "",
        content: "",
        cover: "",
    });
    
    const params = useParams();
    const navigate = useNavigate();
    const { authorizationToken } = useAuth();

    const getSingleBlogData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/data/blogs/${params.blogId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const blogData = await response.json();
                setData(blogData);
            } else {
                console.error('Failed to fetch blog data');
            }
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    useEffect(() => {
        getSingleBlogData();
    }, [params.blogId]);

    const { title, username, email, summary, content, cover } = data;

    const blogDetailStyle = {
        margin: '30px auto',
        maxWidth: '800px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#ffffff',
        backgroundColor: '#1c2331',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        overflow: 'hidden',
    };

    const blogHeadingStyle = {
        fontSize: '2.5em',
        marginBottom: '20px',
        color: '#007bff',
        fontWeight: 'bold',
        textAlign: 'center',
    };

    const imageContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        backgroundColor: '#212939',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'cover',
    };

    const blogMetaStyle = {
        marginBottom: '20px',
        textAlign: 'center',
    };

    const blogMetaTextStyle = {
        margin: '0',
        fontSize: '1em',
        color: '#ffffff',
    };

    const blogMetaStrongStyle = {
        fontWeight: 'bold',
        marginRight: '5px',
        color: '#007bff',
    };

    const blogContentStyle = {
        fontSize: '1.2em',
        marginBottom: '20px',
        textAlign: 'justify',
    };

    const blogContentStrongStyle = {
        color: '#007bff',
    };

    const buttonStyle = {
        display: 'block',
        margin: '20px auto',
        padding: '10px 20px',
        fontSize: '1em',
        color: '#ffffff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center',
        textDecoration: 'none',
    };

    return (
        <div style={blogDetailStyle}>
            <h1 style={blogHeadingStyle}>{title || 'Title not available'}</h1>
            <div style={blogMetaStyle}>
                <p style={blogMetaTextStyle}>
                    <strong style={blogMetaStrongStyle}>Author</strong>: {username ? `${username}/${email}` : 'Author details not available'}
                </p>
            </div>
            <div style={imageContainerStyle}>
                {cover && <img src={cover} alt={title} style={imageStyle} />}
            </div>
            <div style={blogContentStyle}>
                <p><strong style={blogContentStrongStyle}>Summary: </strong>{summary || 'Summary not available'}</p>
                <p><strong style={blogContentStrongStyle}>Description: </strong>{content || 'Content not available'}</p>
            </div>
            <button style={buttonStyle} onClick={() => navigate('/blogs')}>
                Back to Blogs
            </button>
        </div>
    );
};

export default BlogDetail;
