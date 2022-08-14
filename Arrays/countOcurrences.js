// countOccurrences

// Counts the occurrences of a value in an array.

// Use Array.reduce() to increment a counter each time you encounter the specific value inside the array.

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1)); // 3

const array = ['a', 'b', 'c']

array.forEach((value, i) => {
  console.log(i, value)
})

const mapped = array.map(value => {
  return value.toUpperCase()
})

console.log(mapped)

const filtered = array.filter((value, i) => {
  return i % 2 == 0
})

console.log('filteres odd indexes only', filtered)

const reduced = array.reduce((acc, value, i) => {
    if(i % 2 == 0) {
        acc.push(value)
    }
    return acc
}, [])

console.log(reduced)
