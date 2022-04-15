const Post = require("../models/Post");

// create new Post
exports.createPost = async (data) => {
    const { user, description, image, like } = data;
    const newPost = new Post();

    newPost.user = user;
    newPost.description = description;
    newPost.image = image;
    newPost.like = like;
    newPost.save();

    console.log('je crée un nouveau post');
}

//TODO voir si cette route est utile!
// Get all Post
exports.allPost = async (userId) => {

    const allPost = await Post.find({ user: userId });

    return allPost;
}

exports.deletePost = async (postId) => {

    const allPost = await Post.findOneAndDelete({ _id: postId });

    return allPost;
}