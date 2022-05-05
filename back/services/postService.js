const Post = require("../models/Post");
const Coment = require("../models/Coment");


// create new Post
exports.createPost = async (data, filename) => {
    const user = JSON.parse(data.user);
    const newPost = new Post();

    newPost.user = user;
    newPost.title = data.titre;
    newPost.description = data.description;
    newPost.image = filename;
    newPost.like = [];
    newPost.save();
}

// Get all Post
exports.allPost = async () => {

    const allPost = await Post.find();


    // find all coment for one post 
    await Promise.all(allPost.map(async (post) => {
        const allComent = await Coment.find({ 'post': post._id });
        post.coment = allComent;

        return post
    }))

    return allPost;
}

exports.deletePost = async (postId) => {

    const allPost = await Post.findOneAndDelete({ _id: postId });

    return allPost;
}

exports.likePost = async (postId, userId) => {

    const post = await Post.findOne({ _id: postId }).exec();

    post.like.push(userId);

    return post.save();
}