const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    author: { type: String, required: true },
    entry: { type: String, required: true }},
    //duration: { type: Number, required: true },
    //date: { type: Date, required: true }},
    { timestamps: true });

const Entry = mongoose.model('Entry', entrySchema);
// exporting
module.exports = Entry;