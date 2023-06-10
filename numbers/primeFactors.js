function getPrimeFactors(number) {
    var factors = [];
    var divisor = 2;
  
    while (number > 2) {
      if (number % divisor === 0) {
        factors.push(divisor);
        number = number / divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }
  
  module.exports = getPrimeFactors;
  