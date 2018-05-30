import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => (
    <section className="products">
        {products && products.map(product => {
            return <ProductCard key={product.title} product={product} />;
        })}
    </section>
);

export default Products;