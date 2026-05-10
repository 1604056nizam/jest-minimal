const {add, divide} = require('../src/math');

describe('Math utilities', () => {
    let a;
    let b;

    beforeEach(() => {
        a = 10;
        b = 0;
    });

    afterEach(() => {
        a = null;
        b = null;
    });

    describe('add()', () => {
        it('should add two numbers correctly', () => {
            const result = add(a, b);
            expect(result).toBe(10);
        });
    });

    describe('divide()', () => {
        it('should divide two numbers correctly', () => {
            const result = divide(a, b);
            expect(result).toBe(5);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => divide(a, 0)).toThrow('Division by zero');
        });
    });
});
