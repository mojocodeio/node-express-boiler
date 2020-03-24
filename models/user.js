const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: { type: String },
    userName: { type: String },
}, { collection: 'users' });

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;