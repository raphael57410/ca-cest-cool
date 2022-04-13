const User = require('../models/User');
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.findUser = async (email, password) => {
    const findUser = await User.find({ email: email }).exec();
    const passCompare = await bcrypt.compareSync(password, findUser[0].password);

    if (passCompare) return findUser;
    else console.log('Vous etes pas inscrit!');
}

exports.createUser = async (email, password) => {
    const newUser = new User();
    const passHash = await bcrypt.hashSync(password, saltRounds);

    newUser.password = passHash;
    newUser.email = email;
    newUser.save();
}