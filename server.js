var express = require('express');
const mongoose = require('mongoose');
var app = express();
const cors = require('cors');
// const morgan = require('morgan');
// const { MongoClient } = require('mongodb');

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const { CONFIG_ENV_CONNECTION } = process.env;



// middlewares
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// output a get function on the screen

app.get('/home', (req, res) => {
    res.status(200).json({ home: 'hello from heroku and node ' });
});


// output a get function from routes folder
// working route!

const getRoute = require('./routes/posts');   //path to file posts.js
app.use('/posts', getRoute);                   //use this route eg. /posts/add








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