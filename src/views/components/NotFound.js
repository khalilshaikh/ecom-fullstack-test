import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (<div className="not-found-container">
        <h1 className="not-found">
            <strong>404</strong>&nbsp;This is not the webpage you were looking for
        </h1>
        <Link className="not-found-goback" to="/">Click to go back</Link>
        <Link className="not-found-goback" to="/pqr">Click to go back</Link>
    </div>);
};

export default NotFound;