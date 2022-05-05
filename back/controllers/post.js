const postServices = require("../services/postService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

// Create Post
exports.createPost = async (req, res) => {
    try {
        postServices.createPost(req.body, req.file.filename);
        res.status(201).send('le post a été crée!');
    } catch (error) {
        console.log(error);
    }
}

// Get all post
exports.allPost = async (req, res) => {
    try {
        const allPost = await postServices.allPost();

        res.status(200).send(allPost);
    } catch (error) {
        console.log(error);
    }
}

// Delete post by id
exports.deletePost = async (req, res) => {
    try {
        const allPost = await postServices.deletePost(req.params.id);

        res.status(200).send('post supprimé: ' + allPost);
    } catch (error) {
        console.log(error);
    }
}

// Like post
exports.likePost = async (req, res) => {

    console.log(req.body);
    try {
        const postLiked = await postServices.likePost(req.params.id, req.body.userId);
        res.status(200).send('post liké!: ' + postLiked);
    } catch (error) {
        console.log(error);
    }
}