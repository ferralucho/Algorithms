function main(factN, fibN) {

    /**
    *   Defines a named recursive function as a property of the math variable. 
    *   @param {Number} n
    *   @returns {Number} The value of n factorial.         
    **/
    var math = {
        // Declare the factorial property
        factorial: 
            // Declare the function as the property's value
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                // Returns 1 if n <= 1
                return 1;
            }
    };

    /**
    *   Defines a named recursive function referenced by the fib variable. 
    *   @param {Number} n
    *   @returns {Number} The value of fibonacci(n).         
    **/
    var fib = function fibonacci(n){
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        else if (n < 1) {
            return 0;
        }
        // else, return 1
        return 1;
    }

    // Print the value returned by passing factN as n to the 
    // function referenced by variable math:
    console.log(math.factorial(factN));
    // and by passing fibN as n to the function referenced by variable fib:
    console.log(fib(fibN));

}