const { Schema, model } = require('mongoose');
const Post = require('../models/Post');

const userSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    lastname: { type: String, minlength: 3, maxlength: 15 },
    firstname: { type: String, minlength: 3, maxlength: 15 },
    email: { type: String },
    password: { type: String, minlength: 5 },
    profilPicture: { type: String },
    bio: { type: String, minlength: 3, maxlength: 280 },
    posts: [{ type: Array, ref: Post }],
    userCreated: { type: Date, default: Date.now },
},
    { timestamp: true }
);

module.exports = model('User', userSchema);