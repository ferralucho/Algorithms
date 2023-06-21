var myObject = {
    price: 20.99,
    get_price : function() {
        return this.price;
    }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;

delete customObject.price;
console.log(customObject.get_price());

/*
When you create object.create(myObject) you are creating new object where the myObject will be the parent of the newly 
created object. Hence the price property will be at the parent.

When you are assigning some value to customObject.price, you are creating a new property on the child. 
This means, when you delete customObject.price it deletes the price property in the customObject (in the child). 
However, when you call the method getprice, first it looks for this.price in the child since the customObject doesn't 
have price property, JavaScript executor walks through the prototype chain towards the parent. Since customObject was 
inherited from myObject and myObject has a price property, the get_price method returns the price from parent. 
Hence, you are getting 20.99
*/