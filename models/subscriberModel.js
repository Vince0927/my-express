const mongoose = require('mongoose');

const subSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },

}, {timestamps: true});

const Sub = mongoose.model('Email', subSchema);
module.exports = Sub;
