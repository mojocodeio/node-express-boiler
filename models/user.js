const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 10,
    },
}, { collection: 'users' });

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;