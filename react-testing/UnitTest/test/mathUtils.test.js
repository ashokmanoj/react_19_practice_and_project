import { describe, it, expect} from 'vitest';
import { add, subtract, multiply, divide } from '../src/mathUtils';

describe('mathUtils', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(add(2, 3)).toBe(5);
            expect(add(-2, -3)).toBe(-5);
            expect(add(-2, 3)).toBe(1);
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
            expect(subtract(-2, -3)).toBe(1);
            expect(subtract(-2, 3)).toBe(-5);
        });
    });

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(-2, -3)).toBe(6);
            expect(multiply(-2, 3)).toBe(-6);
        });
    });

    describe('divide', () => {
        it('should return the quotient of two numbers', () => {
            expect(divide(6, 3)).toBe(2);
            expect(divide(-6, -3)).toBe(2);
            expect(divide(-6, 3)).toBe(-2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
        });
    });
});