let num = 10;
let name = "Luciano Ferrari";
let obj1 = {
    value: "first value"
}
let obj2 = {
    value: "second value"
}
let obj3 = obj2;
function change(num, name, obj1, obj2) {
    num = num * 10;
    name = "Paul Irish";
    obj1 = obj2;
    obj2.value = "new value";
}
 
change(num, name, obj1, obj2);
 
console.log(num); // 10
console.log(name);// "Luciano Ferrari"
console.log(obj1.value);//"first value"
console.log(obj2.value);//"new value"
console.log(obj3.value);//"new value"        
     //Primitive type (string, number, etc.) are passed by value and objects are passed by reference. 
     //If you change a property of the passed object, the change will be affected. However, you assign a new object to the passed object, the changes will not be reflected.