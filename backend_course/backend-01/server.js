const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("welcome backend")
})

app.get('/about', (req, res)=>{
    res.send("i am hassaan")
})

app.listen(3000)