const Post = require("../models/Post");

// create new Post
exports.createPost = async (data) => {
    const { user, description, image, like } = data;
    const newPost = new Post();

    newPost.user = data.currentUser;
    newPost.title = data.title;
    newPost.description = data.description;
    // TODO: ajouter les images dans le formulaire d'ajout
    newPost.image = 'pas encore fonctionelle';
    newPost.like = 0;
    newPost.save();
}

// Get all Post
exports.allPost = async () => {

    const allPost = await Post.find();

    return allPost;
}

exports.deletePost = async (postId) => {

    const allPost = await Post.findOneAndDelete({ _id: postId });

    return allPost;
}