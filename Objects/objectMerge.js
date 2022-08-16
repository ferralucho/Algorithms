/*
const objOne = {a: "a"};
const objtTwo = {...objOne, b: "b"};

console.log(objtTwo)

const objOne = { a: "a", x: { y: "y" } }
const objTwo = { ...objOne, b: "b", ...objOne.x }
delete objTwo.x
console.log(objTwo) // { a: "a", b: "b", y: "y" }
*/

var assert = require('assert');
assert(5 < 7);
assert.equal(5, 5);

function deepMergeFlatten(obj1, obj2) {
    const keys = Object.keys(obj2);
    let nextObj = { ...obj1 };

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = obj2[key];

        if (typeof value === 'object' && value !== null) {
            nextObj = { ...nextObj, ...deepMergeFlatten(nextObj, value) }
        } else {
            nexObj = { ...nextObj, [key]: value }
        }
    }

    return nextObj;
}

let merged = deepMergeFlatten(
    { a: "a" },
    { b: "b", c: { c: "c", d: { d: "d", e: { e: "e" } } } }
)

console.log(merged);

assert.equal(Object.keys(merged).length, 1)