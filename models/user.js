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
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
}, { collection: 'users' });

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;