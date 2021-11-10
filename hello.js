console.log("Hello world!!")
console.log("== __dirname:", __dirname)
console.log("== __filename:", __filename)
// console.log("== process:", process)

// var nameOfVariable = "value of variable"
console.log("== process.env:", process.env)
console.log("== process.env.USER:", process.env.USER)
console.log("== process.env.DB_USERNAME:", process.env.DB_USERNAME)

var fs = require('fs')
var fileData
fs.readFile('hello.js', 'utf8', function (err, contents) {
  if (!err) {
    console.log("== file contents:", contents)
    fileData = contents
  }
})
console.log("== This is after fs.readFile()")
console.log("  -- fileData:", fileData)
console.log("\n\n\n\n")

var synchronousContents = fs.readFileSync('hello.js', 'utf8')
console.log("== synchronous file contents:", synchronousContents)
