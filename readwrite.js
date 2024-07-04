const fs = require('fs')
fs.readFile('data.txt','utf-8',(err,data)=>{
    if (err) throw err
    //clg(data)
fs.writeFile('abc.txt',data,(err)=>{
    if (err) throw err
    clg ('written success')
})

})
