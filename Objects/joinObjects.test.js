var assert = require('assert');

var leftObjArray = [
    { id: 0, name: 'Luciano' },
    { id: 1, name: 'Mariana' }
];

var rightObjArray = [
    { id: 0, email: 'llfer1@gmail.com' },
    { id: 1, email: 'lmarianar2@gmail.com' },
]

function innerJoinObjects({ leftArray, rightArray, key }) {
    const map = new Map();

    leftObjArray.forEach(item => map.set(item[key], item));

    let join = [];
    rightObjArray.forEach(right => {
        const leftItem = map.get(right[key]);

        if (leftItem === undefined) return

        join.push({ ...leftItem, ...right });
    });

    return join;
}

const expectedOutput = [
    { id: 0, name: 'Luciano', email: 'llfer1@gmail.com' },
    { id: 1, name: 'Mariana', email: 'lmarianar2@gmail.com' }
]

console.log(innerJoinObjects(leftObjArray, rightObjArray));
const actualValue = innerJoinObjects({ leftObjArray: leftObjArray, rightObjArray: rightObjArray, key: 'id' });


describe('join objects', () => {
    test('two objects merged', () => {
        assert.deepStrictEqual(actualValue, expectedOutput);
    });
});
