import { describe, it, expect } from "vitest";
import { gcd, fibonacci, factorial } from "../src/mathUtils";

describe("gcd", () => {
  it("should return the greatest common divisor of two numbers", () => {
    expect(gcd(12, 18)).toBe(6);
    expect(gcd(18, 12)).toBe(6);
  });
});

describe("factorial", () => {
  it("should return the factorial of a number", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => factorial(-1)).toThrow(
      "Negative numbers do not have a factorial."
    );
  });
});

describe("fibonacci", () => {
  it("should return the nth Fibonacci number", () => {
    expect(fibonacci(7)).toBe(13);
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => fibonacci(-1)).toThrow("Negative numbers are not allowed.");
  });
});
