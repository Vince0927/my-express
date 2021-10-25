var express = require('express');

var app = express();

// middlewares
app.use(express.json());  

// output a get function on the screen

app.get('/home', (req, res) => {
    res.send('Hi Enteng Gwapo');
});


var PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})