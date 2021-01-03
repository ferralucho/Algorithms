let luciano = {
    name: 'Luciano Ferrari',
    total: 400,
    deductPeriodFee : function(fee){
        this.total = this.total - fee;
        return this.name + ' remaining balance is ' + this.total;
    }
}

let fernanda = {name: 'Fernanda Lopez', total: 1500}
let fernandaFeeDeductor = luciano.deductPeriodFee.bind(fernanda, 200);
console.log(fernandaFeeDeductor());
console.log(fernandaFeeDeductor());

function isTwoPassed(){
let args = Array.prototype.slice.call(arguments);
return args.indexOf(2) != -1;
}
console.log(isTwoPassed(2));

function getMax(arr){
    return Math.max.apply(null, arr);  
  }

  const arr = [10, 12, 15, 21];
  console.log(Math.max(...arr));

  function getMax(arr){
    return Math.max.apply(null, arr);  
  }

  //this
  /* 
    In the global context or inside a function this refers to the window object.
    Inside IIFE (immediate invoking function) if you use "use strict", value of this is undefined. To pass access window inside IIFE with "use strict", you have to pass this.
    While executing a function in the context of an object, the object becomes the value of this
    Inside a setTimeout function, the value of this is the window object.
    If you use a constructor (by using new keyword) to create an object, the value of this will refer to the newly created object.
    You can set the value of this to any arbitrary object by passing the object as the first parameter of bind, call or apply
    For dom event handler, value of this would be the element that fired the event
  */

  //logPrefix
  function log(){
      let args = Array.prototype.slice.call(arguments);
      args.unshift("App ");
      console.log.apply(console, args);
  }

  
log('my message'); //(app) my message