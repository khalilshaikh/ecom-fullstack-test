import React from 'react';
import ProductCard, {ProductCardBody, ProductCardFooter} from './ProductCard';
import { shallow } from 'enzyme';

describe('<ProductCard /> tests', () => {
    const product = {title: 't', description: ''};
    const wrapper = shallow(<ProductCard product={product} />);
    
    it('should find ProductCardBody', () => {
        const element = wrapper.find(ProductCardBody);
        expect(element.length).toBe(1);    
        expect(element.prop('product')).toBe(product);    
    });
    it('should find ProductCardFooter', () => {
        const element = wrapper.find(ProductCardFooter);
        expect(element.length).toBe(1);    
        expect(element.prop('product')).toBe(product);    
    });
});

describe('<ProductCardBody /> tests', () => {
    const product = {title: 't', description: 'd', image: {path: '/a/b.jpg', alt: 'alt'}};
    const wrapper = shallow(<ProductCardBody product={product} />);
    
    it('should find img with correct src', () => {
        const element = wrapper.find('img');
        expect(element.length).toBe(1);    
        expect(element.prop('src')).toBe('/dist/a/b.jpg');    
    });

    it('should find div with classname ribbon hidden', () => {
        const element = wrapper.find('.hidden');
        expect(element.length).toBe(1);    
        expect(element.prop('className')).toBe('ribbon hidden');    
    });
});

describe('<ProductCardFooter /> tests', () => {
    const product = {price: '1000', currency: '$', priceLabel: 'From'};
    const wrapper = shallow(<ProductCardFooter product={product} />);
    
    it('should find priceLabel', () => {
        const element = wrapper.find('.from');
        expect(element.prop('children')).toBe('From');    
    });

    it('should find formatted price', () => {
        const element = wrapper.find('.price');
        expect(element.text()).toBe(' $10.00');    
    });
});
