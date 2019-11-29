const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User', User);
