import React from 'react';
import {formattedPrice} from '../../utils';

export const ProductCardFooter = ({ product }) => {
    const { priceLabel, currency, price } = product;
    return (
        <div className="product-card-footer">
            <p>
                <span className="from">{priceLabel}</span>
                <span className="price">&nbsp;{currency}{formattedPrice(price)}</span>
            </p>
            <a href="#" className="shop-now-container">
                <span className="shop-now">Shop now</span>
            </a>
        </div>
    );
};

export const ProductCardBody = ({ product }) => {
    const { image, title, description, productLabel } = product;
    const imgSrc = `/dist${image.path}`;

    return (
        <div className="product-card-body">
            <div className="product-image">
                <img src={imgSrc} alt={image.alt} />
            </div>
            <div className={productLabel ? 'ribbon' : 'ribbon hidden'}>
                <label>{productLabel}</label>
            </div>
            <div className="product-info">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

const ProductCard = ({ product }) =>
    product &&
    (<div className="product-card-container">
        <ProductCardBody product={product} />
        <ProductCardFooter product={product} />
    </div>);


export default ProductCard;