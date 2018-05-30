import fetch from 'node-fetch';
const url = 'http://localhost:3000/api/products';

export const getProducts = () => {
    return fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return new Error(`Error fetching products ${status} ${statusCode}`);
        });
};
