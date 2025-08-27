import {flattenArray, intersectArrays, removeDuplicates} from "../src/arrayUtils";
import { describe, it, expect } from "vitest";

describe("flattenArray", () => {
    it("should flatten a nested array", () => {
        expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
    });
});


describe("intersectArrays", () => {
    it("should return the intersection of two arrays", () => {
        expect(intersectArrays([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
        expect(intersectArrays([1, 2], [3, 4])).toEqual([]);
    });
});


describe("removeDuplicates", () => {
    it("should remove duplicate elements from an array", () => {
        expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
        expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });
});