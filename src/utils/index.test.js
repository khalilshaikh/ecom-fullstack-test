import {formattedPrice} from '../utils';

describe('utils tests', () => {
    it('should format price', () => {
        const price = '1200';
        const formatted = formattedPrice(price);
        expect(formatted).toBe('12.00');
    });

    it('should format price with pence', () => {
        const price = '1250';
        const formatted = formattedPrice(price);
        expect(formatted).toBe('12.50');
    });
});
