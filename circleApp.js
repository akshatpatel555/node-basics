var circle = require('./lib/circle')

var figlet = require('figlet')

console.log("== circle:", circle)
console.log("== circle.circumference(5):", circle.circumference(5))
console.log("== circle.area(5):", circle.area(5))

figlet('Hello, CS 290!', function (err, data) {
  if (!err) {
    console.log(data)
  }
})
