var express = require('express');
const mongoose = require('mongoose');
var app = express();
// const morgan = require('morgan');
// const { MongoClient } = require('mongodb');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const { CONFIG_ENV_CONNECTION } = process.env;



// middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))


// output a get function on the screen

app.get('/home', (req, res) => {
    res.status(200).json({ home: 'hello from heroku and node ' });
});


// output a get function from routes folder
const getRoute = require('./routes/about');
app.use('/about', getRoute);








// using mongoose
mongoose.connect(process.env.CONFIG_ENV_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, 
    () => console.log('from mongoose.connect = This is connected to mongodb database!')
  );

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})