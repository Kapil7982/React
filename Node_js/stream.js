const fs = require('fs');

const readStream = fs.createReadStream('example.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

readStream.on('data', (chunk) =>{
    writeStream.write(chunk);
});

readStream.on('end',() =>{
    writeStream.end();

    console.log('File copied using streams!');
});