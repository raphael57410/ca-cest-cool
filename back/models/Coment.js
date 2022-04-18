const { Schema, model } = require('mongoose');
const Post = require('../models/Post');
const User = require('../models/User');

const comentSchema = Schema({
    post: [{ type: Schema.Types.ObjectId, ref: Post }],
    user: [{ type: Array, ref: User }],
    coment: { type: String },
    like: [{ type: Schema.Types.ObjectId, ref: User }],
    comentCreated: { type: Date, default: Date.now },
}
);

module.exports = model('Coment', comentSchema);