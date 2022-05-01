const userServices = require("../services/userService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

// Create User
exports.createUser = async (req, res) => {
    const { lastname, firstname, email, password, bio } = req.body;
    const { path } = req.file;

    try {
        userServices.createUser(lastname, firstname, email, password, path, bio);
        res.status(201).send('le user a été crée!');
    } catch (error) {
        console.log(error);
    }
}

// update User
exports.updateUser = async (req, res) => {

    try {
        const userUpdated = await userServices.updateUser(req.body, req.params.id, req.file.filename);
        res.status(200).send({ userUpdated });
    } catch (error) {
        console.log(error);
    }
}

// Update password
exports.updatePassword = async (req, res) => {
    const userId = req.body.body.user._id;
    const newPassword = req.body.body.newPassword;

    try {
        const user = await userServices.updatePassword(userId, newPassword);
        if (user) res.status(200).send('Votre mot de passe a été changé');
    } catch (error) {
        console.log(error);
    }
}

//TODO: voir si besoin de se controller
// //get current user
// exports.getCurrentUser = async (req, res) => {
//     try {
//         const user = await userServices.getCurrentUser(req.params.id);
//         res.status(200).send({ user });
//     } catch (error) {
//         console.log(error);
//     }
// }

// Find User
exports.user = async (req, res) => {
    const { email } = req.body.body;

    try {

        const user = await userServices.findUser(email);

        const token = jwt.sign({
            id: user[0]._id,
            email: user[0].email
        }, SECRET, { expiresIn: '3 hours' })

        // si un user et trouvé on le renvoi avec le token
        if (user.length) res.status(200).send({ user, token });

        if (!user.length) res.status(401).send({ user, message: 'email n\'est pas dans la base de donnée' });


    } catch (e) {
        res.status(400).send('erreur' + e);
    }
}