// (1) IMPORT ALL PACKAGES

var express = require('express');
const mongoose = require('mongoose');
var app = express();
const cors = require('cors');

// (2) CONFIGURE DOTENV AND PORT
require('dotenv').config();
const PORT = process.env.PORT || 5000;
// const { CONFIG_ENV_CONNECTION } = process.env;



// (3) MIDDLEWARES / FUNCTIONS
app.use(express.json()); 
// app.use(express.urlencoded({ extended: false }))
app.use(cors())

// (4) CREATE A HOME SCREEN URL 
// output a get function on the HOME SCREEN
//FILE on screen with url http://localhost:5000/home
app.get('/home', (req, res) => {
    res.json({ home: 'hello from heroku and node ' });
});


// (5) FOLLOW ROUTE FOLDER
// output a get function from routes folder
// working route!
const getRoute = require('./routes/posts_email');   //path to file posts_email.js
app.use('/posts_email', getRoute);                   //use this route eg. /posts_email/add



// (6) CONNECT TO MONGO DATABASE USING MONGOOSE AND DOTENV
// using mongoose, dotenv to connect to database
mongoose.connect(process.env.CONFIG_ENV_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, 
    () => console.log('from mongoose.connect = This is connected to mongodb database!')
  );



// (7) START LISTENING ON PORT
// listening on PORT 5000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


