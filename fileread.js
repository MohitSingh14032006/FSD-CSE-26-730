const fs = require('fs')

fs.readFile('calc.html','utf8',(err,data)=>{
    if(err){
        console.log("Error reading file:",err);
        return;        
    }

    console.log("File Content: ")
    console.log(data);
    
})