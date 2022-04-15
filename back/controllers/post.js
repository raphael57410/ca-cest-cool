const postServices = require("../services/postService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

// Create Post
exports.createPost = async (req, res) => {
    try {
        postServices.createPost(req.body.body);
        res.status(201).send('le post a été crée!');
    } catch (error) {
        console.log(error);
    }
}

// Get all post
exports.allPost = async (req, res) => {
    try {
        const allPost = await postServices.allPost(req.body.body);

        res.status(200).send(allPost);
    } catch (error) {
        console.log(error);
    }
}

// Delete post by id
exports.deletePost = async (req, res) => {
    try {
        const allPost = await postServices.deletePost(req.body.body);

        res.status(200).send('post supprimé: ' + allPost);
    } catch (error) {
        console.log(error);
    }
}