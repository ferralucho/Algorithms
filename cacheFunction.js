function cacheFn(fn) {
    let cache = {};

    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            cache[arg] = fn(arg);
            return cache[arg];
        }
    }
}
// you will pass a function and it will internally maintain a cache object where calculated value will be cached. 
//When you will call the function with same argument, the cached value will be served.

//With more than one argument;

function cacheFnMultiple(fn) {
    let args = arguments;
    let key = [].slice.call(args).join('');
    if (cache[key]) {
        return cache[key];
    } else {
        cache[key] = fn.apply(this, args);
        return cache[key];
    }
}


var obj = {   // every method returns obj---------v
    first: function() { console.log('first');   return obj; },
    second: function() { console.log('second'); return obj; },
    third: function() { console.log('third');   return obj; }
}

obj.first().second().third();
        