const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
    // email:{
    //     type: String,
    //     required: true,
    // },
    // subject: {
    //     type: String,
    //     required: true,
    // },
    // message:{
    //     type: String,
    //     required: true,
    // },

}, {timestamps: true});

const email = mongoose.model('model_Posts', PostSchema);
module.exports = email;
