const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    view: {
        type: String,
        default: 'daily'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;