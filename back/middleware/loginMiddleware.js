const User = require('../models/User');
const bcrypt = require("bcrypt");

// middleware for check the password
const loginMiddleware = async (req, res, next) => {
    const { email, password } = req.body.body;

    // find the user with email
    const findUser = await User.find({ email: email });

    if (findUser.length) {
        const passCompare = await bcrypt.compareSync(password, findUser[0].password);

        // compare the password
        if (passCompare) next();
    } else res.status(404).send({ message: "erreur dans l'email ou le mot de passe!" })
}
module.exports = loginMiddleware;