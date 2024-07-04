const fs = require('fs')
let data = fs.readFileSync('emp.txt','utf-8')
fs.writeFileSync('data.txt',empdata)
console.log("Employee data written into new file ie data.txt")