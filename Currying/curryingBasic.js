//CURRYING

let dragon = 
name => 
size => 
element=>
name + 'is a ' +
size + ' dragon that breathes '+
element + '!'

let thedragon = dragon('fluffy')
console.log(thedragon('small')('fire'));