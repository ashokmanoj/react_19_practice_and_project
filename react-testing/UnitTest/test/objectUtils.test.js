import {deepMerge, deepClone, flattenObject} from "../src/objectUtils";
import { describe, it, expect } from "vitest";


describe("deepMerge", () => {
    it("should merge nested objects correctly", () => {
        const obj1 = { a: 1, b: { c: 2, d: 3 } };
        const obj2 = { b: { c: 20, e: 5 }, f: 6 };
        const merged = deepMerge(obj1, obj2);
        expect(merged).toEqual({ a: 1, b: { c: 20, d: 3, e: 5 }, f: 6 });
    });

    it("should overwrite properties of obj1 with properties from obj2 in case of conflicts", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        const merged = deepMerge(obj1, obj2);
        expect(merged).toEqual({ a: 1, b: 3, c: 4 });
    });

    it("should work with objects that have different structures", () => {
        const obj1 = { a: { b: { c: 1 } } };
        const obj2 = { d: 2 };
        const merged = deepMerge(obj1, obj2);
        expect(merged).toEqual({ a: { b: { c: 1 } }, d: 2 });
    });
}   );


describe("deepClone", () => {
    it("should return a new object that is a deep copy of the original", () => {
        const original = { a: 1, b: { c: 2, d: 3 } };
        const cloned = deepClone(original);
        expect(cloned).toEqual(original);
        expect(cloned).not.toBe(original);
        expect(cloned.b).not.toBe(original.b);
    });
});


describe("flattenObject", () => {
    it("should flatten a nested object", () => {
        const original = { a: 1, b: { c: 2, d: 3 } };
        const flattened = flattenObject(original);
        expect(flattened).toEqual({ a: 1, "b.c": 2, "b.d": 3 });
    });
});