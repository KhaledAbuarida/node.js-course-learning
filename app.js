const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("home route");
    res.send('<h1>Hello World!</h1>');
});

app.use('/add-product', (req, res, next) => {
    console.log('add product route')
    res.send("<h1>add-product page</h1>")
});



app.listen(3000)