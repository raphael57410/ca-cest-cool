const User = require('../models/User');
const bcrypt = require("bcrypt");

// middleware for check the password
const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;

    // find the user with email
    const findUser = await User.find({ email: email });
    // compare the password
    const passCompare = await bcrypt.compareSync(password, findUser[0].password);

    if (passCompare) next();
    else return res.send("erreur dans l'email ou le mot de passe!")
}
module.exports = loginMiddleware;