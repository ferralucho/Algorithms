// findLast
// Returns the last element for which the provided function returns a truthy value.

// Use Array.filter() to remove elements for which fn returns falsey values, Array.slice(-1) to get the last one.

const findLast = (arr, fn) => arr.filter(fn).slice(-1)[0];

findLast([1, 2, 3, 4], n => n % 2 === 1); // 3