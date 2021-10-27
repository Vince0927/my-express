// (1) IMPORT MONGOOSE
const mongoose = require('mongoose');

// (2) CREATE SCHEMA FOR DATABASE
const emailSchema = mongoose.Schema({
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

// (3) ASSIGN AND EXPORT
const Email = mongoose.model('Email', emailSchema);
module.exports = Email;
