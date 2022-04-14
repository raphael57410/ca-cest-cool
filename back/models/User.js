const { Schema, model } = require('mongoose');
const Post = require('../models/Post');

const userSchema = new Schema({
    lastname: { type: String, minlength: 3, maxlength: 15 },
    firstname: { type: String, minlength: 3, maxlength: 15 },
    email: { type: String },
    password: { type: String, minlength: 5 },
    profilPicture: { type: String },
    bio: { type: String, minlength: 3, maxlength: 280 },
    posts: [{ type: Schema.Types.ObjectId, ref: Post }],
    userCreated: { type: Date, default: Date.now },
},
    { timestamp: true }
);

module.exports = model('User', userSchema);