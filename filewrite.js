const { log } = require('node:console');
const fs = require('node:fs')

try{
    const content = 'This is written synchronously. Hello!!!';
    fs.writeFileSync('output.txt', content, 'utf8')
    console.log('File written successfully!');    
}
catch(error){
    console.log(error);
    
}