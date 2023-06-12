function solution(length, fares){
    const credit = 20;
    const rides = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"]

    const index = fares.findLastIndex((fare, i) => {
        console.log({i, length, fare, result: fare * length})
        return (fare * length) <= credit
    })
    return index
}

const sol = solution(30, [0.3, 0.5, 0.7, 1, 1.3])

console.log(sol);

describe('solution', () => {
    test('returns the correct index of the fare', () => {
        expect(sol).toBe(1);
    });
});