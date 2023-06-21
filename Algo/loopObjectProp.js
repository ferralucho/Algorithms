//This loop iterates (in an arbitrary order) over the name of each enumerable property in an object, allowing statements to be executed for each distinct property.

var actress = {
    firstName: "Julia",
    lastName: "Roberts",
    dateOfBirth: "October 28, 1967",
    nationality: "American",
    firstMovie: "Satisfaction"
};

for (var property in actress) {
    console.log("actress." + property + " = " + actress[property]);
}

//for-of

//This loop iterates over iterable objects such as an Array, Map, Set, String, TypedArray, arguments object, etc. It essentially iterates over the value of each distinct property in the structure, such as each letter in a word or each element in an array.
function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}

let streetStr = "Street 12 Street 2 Street 1 Street 4";
main(streetStr);

let actress2 = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress2) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress2) {
    console.log(info[0] + ": " + info[1]);
}