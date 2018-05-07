// pull

// Mutates the original array to filter out the values specified.

// Use Array.filter() and Array.includes() to pull out the values that are not needed. Use Array.length = 0 to mutate the passed in an array by resetting it's length to zero and Array.push() to re-populate it with only the pulled values.

const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};


let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
