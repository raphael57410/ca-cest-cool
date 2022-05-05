const { Schema, model } = require('mongoose');
const Post = require('../models/Post');

const userSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    lastname: { type: String, minlength: 3, maxlength: 15 },
    firstname: { type: String, minlength: 3, maxlength: 15 },
    email: { type: String, required: true },
    password: { type: String, minlength: 5, required: true },
    profilPicture: { type: String, required: true },
    bio: { type: String, minlength: 3, maxlength: 280, required: false },
    posts: [{ type: Array, ref: Post }],
    userCreated: { type: Date, default: Date.now },
},
    { timestamp: true }
);

module.exports = model('User', userSchema);