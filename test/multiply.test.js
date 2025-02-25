const { multiply } = require('../debug_code'); // Adjust path based on your file structure

test('Multiplies two positive numbers', () => {
    expect(multiply(3, 4)).toBe(12);
});

test('Multiplies a number by zero', () => {
    expect(multiply(5, 0)).toBe(0);
});

test('Handles negative numbers', () => {
    expect(multiply(-2, 3)).toBe(-6);
});
