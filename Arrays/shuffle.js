// shuffle

// Randomizes the order of the values of an array, returning a new array.

// Uses the Fisher-Yates algorithm to reorder the elements of the array.

const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2,3,1], foo = [1,2,3]
