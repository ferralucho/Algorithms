/*
Implement a method to return the value from an array of integers that is closest to zero.  
If there are two equally close to zero elements, like 2 and -2, consider the positive element to be "closer" to zero.

Example: The expected output for the array [-8, 3, 11, 2, 1, 4, 21, -3, -2 ] should be 1.

[-8, -3, -11, -2, -2 ] 

Example: The expected output for the array [5, 3, -2, 7] should be -2.
*/

function minValue() {
    let sorted = input.sort((a, b) => {
        return a - b
    });

    console.log(sorted)

    let minPositiveValue = 0;
    let maxNegativeValue = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] > 0 && minPositiveValue === 0) {
            minPositiveValue = sorted[i];
            break;
        }

        if (sorted[i] < 0) {
            maxNegativeValue = sorted[i];
        }
    }

    if (-maxNegativeValue < minPositiveValue || (minPositiveValue === 0 && maxNegativeValue !== 0)) {
        return maxNegativeValue;
    }

    return minPositiveValue;
}

//let input = [-8, 3, -1, 11, 2, 4, 21, -3, -2];

let input = [-8, -3, -11, -2, -2, 0, 1];

let minVal = minValue(input);
console.log(minVal);