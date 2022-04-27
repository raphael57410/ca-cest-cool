const User = require('../models/User');
const bcrypt = require("bcrypt");

// middleware for check the password
const changePassMiddleware = async (req, res, next) => {
    const { email } = req.body.body.user;
    const password = req.body.body.oldPassword;

    // find the user with email
    const findUser = await User.find({ email: email });

    if (findUser.length) {
        const passCompare = await bcrypt.compareSync(password, findUser[0].password);

        // compare the password
        if (passCompare) next();
        else res.status(404).send("Vous avez entrez le mauvais mot de passe");
    } else res.status(404).send("Cet email n'est pas enregistré dans notre base de données");

}
module.exports = changePassMiddleware;