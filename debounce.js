// debounce function that will wrap our event
function debounce(fn, delay) {
    // maintain a timer
    let timer = null;
    // closure function that has access to timer
    return function() {
      // get the scope and parameters of the function 
      // via 'this' and 'arguments'
      let context = this;
      let args = arguments;
      // if event is called, clear the timer and start over
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  }

  // function to be called when user scrolls
function foo() {
    console.log('You are scrolling!');
  }
  
  // wrap our function in a debounce to fire once 2 seconds have gone by
  let elem = document.getElementById('container');
  elem.addEventListener('scroll', debounce(foo, 2000));