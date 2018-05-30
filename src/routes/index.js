import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import HomePage from '../views/HomePage';
import NotFound from '../views/components/NotFound';


export const renderRouter = ({products}) => {
    return (
        <Router history={hashHistory}>
            <Route path="/" products={products} component={HomePage} />
            <Route path="*" component={NotFound} />
        </Router>
    );
};
