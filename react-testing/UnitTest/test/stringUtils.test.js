import { reverseString, capitalizeWords, isPalindrome } from "../src/stringUtils";
import { describe, it, expect } from "vitest";

describe("reverseString", () => {
    it("should correctly reverse different strings", () => {
        expect(reverseString("hello")).toBe("olleh");
        expect(reverseString("React Testing")).toBe("gnitseT tcaeR");
    });    
});


describe("capitalizeWords", () => {
    it("should capitalize each word properly", () => {
        expect(capitalizeWords("hello world")).toBe("Hello World");
        expect(capitalizeWords("javaScript is fun")).toBe("JavaScript Is Fun");
    });
});


describe("isPalindrome", () => {
    it("should return true for valid palindromes", () => {
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    });
    
    it("should return false for non-palindromes", () => {
        expect(isPalindrome("hello")).toBe(false);
        expect(isPalindrome("JavaScript")).toBe(false);
    });
});