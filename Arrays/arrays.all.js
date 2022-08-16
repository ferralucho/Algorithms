// all

// Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

// Use Array.every() to test if all elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.

const all = (arr, fn = Boolean) => arr.every(fn);

// Examples

all([4, 2, 3], x => x > 1); // true
console.log(all([1, 3], x => x % 2 !== 0)); // true


console.log([4,2,3].every(x => x > 1)); //

let mapped = [4,2,3].filter(x => x % 2 !== 0);
console.log(mapped, "mapped")