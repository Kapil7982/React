const express = require('express');

const customMiddleware = require('./middleware');

const _ = require('lodash');


const app = express();

const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hello, Express API!');
});

app.get('/about', (req, res) =>{
    res.send('This is the About page.');
});

app.get('/user/:username', (req, res)=>{
    const username = req.params.username;

    res.send(`Welcome, ${username}!`);
});

app.post('/api/data', express.json(), (req, res) =>{
    const data = req.body;

    res.json({message: 'Data received successfully', data});
});

app.use((err, req, res, next) =>{
    console.log(err.stack);
    res.status(500).send("Something went wrong!")
});

app.use(customMiddleware.logRequest);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

const numbers = [1,2,3,4,5];

const sum = _.sum(numbers);

console.log("Sum of numbers :", sum);