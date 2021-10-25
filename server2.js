var express = require('express');

var app = express();

// output a get function on the screen

app.get('/', (req, res) => {
    res.send('Hi Enteng Gwapo');
});


var PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})