const User = require('../models/User');
const bcrypt = require("bcrypt");
const saltRounds = 10;

// find User
exports.findUser = async (email, password) => {
    const findUser = await User.find({ email: email });
    const passCompare = await bcrypt.compareSync(password, findUser[0].password);

    if (passCompare) return findUser;
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