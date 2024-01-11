var circle =  require('./lib/circle')  //takes whatever is in module.exports (functions, strings, etc..)

var figlet = require('figlet')          //npm install (name)

console.log("== circle: ", circle)
console.log("== circle(5): ", circle(5))    //circumference of r=5
console.log("== circle.circumference(5)", circle.circumference(5))
console.log("== circle.area(5)", circle.area(5))

//npm innit (crates package.json)
figlet(('Hello, cs290!'), function )
