import React from 'react';
import '../stylesheets/listingPage.scss';
import Products from './components/Products';

const HomePage = (props) => {
    return (
        <main>
            <h1>Product listing</h1>
            {props && props.route && <Products {...props.route} />}
        </main>
    );
};

export default HomePage;