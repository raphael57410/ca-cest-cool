const { Schema, model } = require('mongoose');
const User = require('../models/User');

const postSchema = Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    description: { type: String },
    image: { type: String },
    like: { type: String },
    postCreated: { type: Date, default: Date.now },
}
);

module.exports = model('Post', postSchema);