import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../auth/auth';
import './Navbar.css';
import image from '../../assets/techligence_white.png';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JavaScript bundle
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                <img src={image} alt="Logo" style={{ marginLeft: '30px', height: '70px', objectFit: 'contain' }} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarNav"
                style={{ textAlign: 'center' }} // Center-align text
            >
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/shopping">Shopping</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/shopping/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>
                </ul>
                <div className="d-flex justify-content-center">
                    {isLoggedIn ? (
                        <Link className="btn btn-outline-light ms-2" to="/logout">Logout</Link>
                    ) : (
                        <>
                            <Link className="btn btn-outline-light ms-2" to="/register">Register</Link>
                            <Link className="btn btn-outline-light ms-2" to="/login">Login</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
