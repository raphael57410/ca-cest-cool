const { Schema, model } = require('mongoose');
const User = require('../models/User');
const Coment = require('../models/Coment');

const postSchema = Schema({
    user: [{ type: Object, ref: User }],
    coment: [{ type: Array, ref: Coment }],
    title: { type: String },
    description: { type: String },
    image: { type: String },
    like: { type: Boolean },
    postCreated: { type: Date, default: Date.now },
}
);

module.exports = model('Post', postSchema);