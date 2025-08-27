// deepMerge(obj1, obj2): This function merges two objects obj1 and obj2 deeply. Write tests to ensure that:

// The function merges nested objects correctly.
// It correctly overwrites properties of obj1 with properties from obj2 if there are conflicts.
// It works with objects that have different structures (e.g., one with nested objects and the other with flat properties).

export function deepMerge(obj1, obj2) {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && !Array.isArray(obj2[key])) {
                result[key] = deepMerge(result[key] || {}, obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}

// deepClone(obj): This function clones an object obj deeply. Write tests to verify that:

// The function returns a new object that is a deep copy of the original.
// The clone is independent of the original object (i.e., changes to the clone should not affect the original).
// It works with nested objects and arrays inside the object.
export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}

// flattenObject(obj): This function flattens a nested object obj. Write tests to ensure that:

// The function correctly flattens nested objects into key-value pairs.
// It handles objects with multiple levels of nesting and special characters in keys.
// It works with objects that contain arrays and other non-object data types.

export function flattenObject(obj, parentKey = '', result = {}) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
                flattenObject(obj[key], newKey, result);
            } else {
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}