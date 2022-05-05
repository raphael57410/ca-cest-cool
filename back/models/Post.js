const { Schema, model } = require('mongoose');
const User = require('../models/User');
const Coment = require('../models/Coment');

const postSchema = Schema({
    user: [{ type: Object, ref: User }],
    coment: [{ type: Array, ref: Coment }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    like: [{
        type: Schema.Types.ObjectId,
        ref: User,
        required: false,
    }],
    postCreated: { type: Date, default: Date.now },
}
);

module.exports = model('Post', postSchema);