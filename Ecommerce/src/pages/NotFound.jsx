import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404</h1>
            <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="not-found-link">
                Go back to Home
            </Link>
        </div>
    );
};

export default NotFound;
