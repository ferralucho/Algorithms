// Curring is partial invocation of a function. Currying means first few arguments of a function is pre-processed and a 
//function is returned. The returning function can add more arguments to the curried function.

Function.prototype.curry = function () {
    if (arguments.length < 1) {
        return this;
    }
    let self = this;
    let args = [].slice.call(arguments);
    return function () {
        return self.apply(this, args.concat([].slice.call(arguments)));
    }
}

let converter = function (factor, symbol, input) {
    return input * factor + symbol;
}

let milesToKm = converter.curry(1.62, 'km');
console.log(milesToKm(3));

let kgToLb = converter.curry(2.2, 'lb');
console.log(kgToLb(3));