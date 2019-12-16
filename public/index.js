const path = require('path');
const express = require('express');
const app = express();

app.get('', (req,res) =>{
    res.send('Thami likes bagels and butters.');
})

app.get('/thamisucks', (req,res) =>{
    res.send('Thami sucks.');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
//http://127.0.0.1:3000/