const getPrimeFactors = require('./primeFactors.js');

test('Prime factors of 72', () => {
  const num = 72;
  const primeFactors = getPrimeFactors(num);
  expect(primeFactors).toEqual([2, 2, 2, 3, 3]);
});

test('Prime factors of 3', () => {
  const num = 3;
  const primeFactors = getPrimeFactors(num);
  expect(primeFactors).toEqual([3]);
});
