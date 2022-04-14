const postServices = require("../services/postService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

// Create User
exports.createPost = async (req, res) => {
    try {
        postServices.createPost();
        res.status(201).send('le user a été crée!');
    } catch (error) {
        console.log(error);
    }
}