import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../auth/auth";

const Blogs = () => {
    const { blogs } = useAuth();

    // Inline styles
    const sectionBlogsStyle = {
        padding: '2rem',
        backgroundColor: '#f9f9f9'
    };

    const blogsHeadingStyle = {
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
    };

    const blogContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
    };

    const cardStyle = {
        backgroundColor: '#1c2331',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        // maxWidth: '600px', // Restrict maximum width of the card
        height: '200px', // Set fixed height for the card
        margin: '0 auto' // Center the card horizontally
    };

    const cardImageStyle = {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    };

    const cardImageImgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    };

    const cardDetailsStyle = {
        flex: 2,
        padding: '1rem',
        overflow: 'hidden'
    };

    const cardDetailsH2Style = {
        fontSize: '1.2rem', // Adjust font size to fit better within fixed height
        margin: '0.5rem 0',
        color: '#007bff',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    const cardDetailsPStyle = {
        fontSize: '0.9rem', // Adjust font size for better fit
        color: '#ffffff',
        margin: 0,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    const cardDetailsStrongStyle = {
        color: '#007bff'
    };

    return (
        <section style={sectionBlogsStyle}>
            <div>
                <h1 style={blogsHeadingStyle}>Welcome to blogs page</h1>
            </div>
            <div style={blogContainerStyle}>
                {blogs.map((curElem) => {
                    const { id, username, email, title, summary, cover } = curElem;
                    return (
                        <Link to={`/blogs/${id}`} style={{ textDecoration: 'none' }} key={id}>
                            <div style={cardStyle}>
                                <div style={cardImageStyle}>
                                    <img src={cover} alt="our blogs img" style={cardImageImgStyle} />
                                </div>
                                <div style={cardDetailsStyle}>
                                    <h2 style={cardDetailsH2Style}>{title}</h2>
                                    <p style={cardDetailsPStyle}>{summary}</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                        <p><strong style={cardDetailsStrongStyle}>Author</strong>: {username}/{email}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Blogs;
