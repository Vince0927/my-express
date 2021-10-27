
// (1) IMPORT EXPRESS, ROUTER, MODEL
const express = require('express');
const router = express.Router();
const databasePost = require('../models/emailModel.js');
// dummy
const emailData = require('../dummyModels/dummyEmail.js');
const updatedEmail = require('../updatedObjects/email.js');






// (2) CREATE GET PATH
// GET - WORKING!
// send specific route to screen
router.get('/specific', (req, res) => {
    res.send('This is the specific post route from another folder');
});


// GET dummy - WORKING!
// get data from the dummy database
// router.get('/dummy', async (req, res) => {
//     try{
//         res.json({
//             data: emailData
//           });

//     }catch(err){
//         res.json({ message: err});
//     }
// });

// // get all data from dummy database









// (3) CREATE POST PATH
// POST - WORKING!
// POST DATA TO DATABASE
router.post('/add', async (req, res) => {
    const post = new databasePost({
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);

    } catch(err){
        res.json({message: err});
    }
})







// (4) CREATE GET UNIQUE ID
// GET unique id

// GET SPECIFIC POST FROM UNIQUE ID- working

router.get('/db_getid/:id', async (req, res) => {
    try{
    const post = await databasePost.findById(req.params.id);
    res.json(post);

    }catch(err){
        res.json({message: err});    
    }
})


// router.get('/dummy/:id', async(req, res) => {
//     let {id} = req.params;
//     id = Number(id);
//     try{
//         let data;
//         data = emailData.find(data => data._id === id);
//         res.json({
//             unique_data: data
//         });

//     }catch(err){
//         res.json({message: err})
//     }
// })








// (5) CREATE DELETE PATH
// DELETE POST -working
// router.delete('/db_delete/:id', async(req, res) => {
//     try{
//         const removedPost = await databasePost.remove({_id: req.params.id});
//         res.json(removedPost);
//     }catch(err){
//         res.json({message: err});
//     }

// })


// REMOVED USING GET and output it on the screen - (ORIGINAL/WORKING)
// removing dummy data using id
// router.get('/dummy_deleted/:id', async( req, res) => {
//     let {id} = req.params;
//     id = Number(id);

//     for (let i = 0; i < emailData.length; i++){
//         if(emailData[i]._id === id){
//             emailData.splice(i, 1);
//         }
//     }
//     try{
//         res.json({
//             removedOneId: emailData
//         })
//         console.log(`Successfully removed ID: ${id}`);

//     }catch(err){
//         res.json({message: err})
//     }
// })






// (6) CREATE UPDATE PATH
// UPDATE A POST - working
// email, subject etc
// router.patch('/db_update/:id', async (req, res) => {
//     try{
//         const updatedPost = await databasePost.updateOne(
//             {_id: req.params.id}, 
//             { $set: {name: req.body.name, 
//                     email: req.body.email, 
//                     subject: req.body.subject, 
//                     message: req.body.message}});
//         res.json(updatedPost);
//     }catch(err){
//         res.json({message: err});
//     }
// })



// CREATED PATCH OR UPDATES TO DUMMY DATA  (ORIGINAL/WORKING)
// router.get('/dummy_updated/:id', async( req, res) => {
//     let {id} = req.params;
//     id = Number(id);

//     for (let i = 0; i < emailData.length; i++){
//         if(emailData[i]._id === id){
//             emailData.splice(i, 1);
//         }
//     }
//     let container = [];
//     for( let key in updatedEmail){
//         container.push(updatedEmail[key]);
//     }

//     let updatedEmailData = {
//         _id: id,
//         email: container[0],
//         subject: container[1],
//         message: container[2]
//     }

//     try{
//         const finalEmailData = emailData.concat(updatedEmailData);

//         res.json({
//             newEmailUpdates: finalEmailData
//         })


//     }catch(err){
//         res.json({message: err})
//     }
// })







// (7) EXPORT MODULE
module.exports = router;