const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String
});

module.exports = mongoose.model('User', User);
