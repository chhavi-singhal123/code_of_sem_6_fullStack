//import add from './demo.js';
//const add = require('./demo.js');
//console.log(add(2, 3)); // Should print 5
function greet(name , callback){
    console.log("hello"+name);
    callback()
}
function byebye(){
    console.log("byebye");
}
greet("ayush",byebye);

console.log("Start");

setTimeout(function() {
    console.log("Inside Callback");
}, 2000);

console.log("End");


