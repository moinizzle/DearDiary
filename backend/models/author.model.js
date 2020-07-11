const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//const id = Schema.ObjectId;

const authorSchema = new Schema({
    author: { type: String, required: true, unique: true, trim: true, minlength: 2, maxlength: 25 }},
    { timestamps: true } );


// create model with Schema

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;