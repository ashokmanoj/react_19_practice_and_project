// flattenArray(arr): This function flattens a nested array arr. Write tests to verify that:

// The function correctly flattens arrays of varying depths.
// It works with arrays containing non-array elements.
// It handles edge cases like empty arrays and arrays with only primitive values.
export function flattenArray(arr) {
    return arr.flat(Infinity);
}

// intersectArrays(arr1, arr2): This function finds the intersection of two arrays arr1 and arr2. Write tests to ensure that:

// The function returns an array containing only the elements that are common to both arrays.
// It handles cases where there are no common elements.
// It works with arrays of different lengths and types of data.
export function intersectArrays(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}


// removeDuplicates(arr): This function removes duplicate elements from an array arr. Write tests to ensure that:

// The function correctly removes all duplicates, leaving only unique elements.
// It works with arrays containing numbers, strings, or mixed data types.
// It handles edge cases like arrays with no duplicates or arrays with only one element.\
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}