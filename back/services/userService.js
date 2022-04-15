const User = require('../models/User');
const Post = require('../models/Post');
const Coment = require('../models/Coment');
const bcrypt = require("bcrypt");
const saltRounds = 10;

// find User
exports.findUser = async (email) => {
    const findUser = await User.find({ email: email }).select('posts _id lastname firstname email profilPicture bio userCreated');

    // find all post by email for the current user
    const findAllPost = await Post.find({ 'user.email': findUser[0].email });

    //TODO find all coment for the post

    findUser[0].posts = findAllPost;

    if (findUser) return findUser;
    else console.log('Vous etes pas inscrit!');
}

// create new User
exports.createUser = async (lastname, firstname, email, password, profilPicture, bio) => {
    const newUser = new User();
    const passHash = await bcrypt.hashSync(password, saltRounds);

    newUser.lastname = lastname;
    newUser.firstname = firstname;
    newUser.email = email;
    newUser.password = passHash;
    newUser.profilPicture = profilPicture;
    newUser.bio = bio;
    newUser.save();
}