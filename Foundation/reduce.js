var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
  ]
  
  var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount
  }, 0)
  
  /*
  var totalAmount = 0
  for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount
  }*/
  
  console.log(totalAmount)
  
  
  const output = fs.readFileSync('data.txt', 'UTF8')
    .trim()
    .split('\n')
    .map((line) => line.split('\t'))
    .reduce((customers, [name, order, price, quantity]) => {
      customers[name] = customers[name] || [];
      customers[name].push({ order, price, quantity });
      console.log(customers)
      return customers;
    }, {});
    
   //MAP
   // Define the callback function.  
  function AreaOfCircle(radius) {  
      var area = Math.PI * (radius * radius);  
      return area.toFixed(0);  
  }  
  
  // Create an array.  
  var radii = [10, 20, 30];  
  
  // Get the areas from the radii.  
  var areas = radii.map(AreaOfCircle);  