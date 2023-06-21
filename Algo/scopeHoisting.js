var a = 1; 
function b() { 
    a = 10; 
    return; 
    function a() {} 
} 
b(); 
console.log(a);          
        /* 
    function declaration function a(){} is hoisted first and it behaves like var a = function () {};. Hence in local scope variable a is created.
    If you have two variables with same name (one in global another in local), local variable always get precedence over global variable.
    When you set a = 10;, you are setting the local variable a , not the global one. Hence, the value of global variable remain same and you get, 1 in the log. ref: js hoisting/scope
    Extra: If you didnt have a function named as "a", you will see 10 in the log.
*/

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() {
        return 8;
    }
}
foo();//? is 8
        