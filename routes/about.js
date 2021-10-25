const express = require('express');
const router = express.Router();
const databasePost = require('../models/model_post');



// GET - WORKING!
// send specific route to screen
router.get('/specific', (req, res) => {
    res.send('This is the specific post route from another folder');
});


// POST - WORKING!
// POST DATA TO DATABASE
router.post('/add', async (req, res) => {
    const post = new databasePost({
        name : req.body.name
        // email: req.body.email,
        // subject: req.body.subject,
        // message: req.body.message,
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);

    } catch(err){
        res.json({message: err});
    }
})



// GET FROM DATABASE
// get data from the database

// router.get('/all', async (req, res) => {
//     try{
//         const fromDatabaseData = databasePost.find();
//         res.json(fromDatabaseData);
//         console.log(fromDatabaseData);

//     }catch(err){
//         res.json({ message: err});
//     }
// });








module.exports = router;