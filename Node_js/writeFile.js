const fs = require('fs');

const content = 'Hello , this is content written using Node.js!';

fs.writeFile('output.txt', content, (err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log('File written sucessfully!');
})