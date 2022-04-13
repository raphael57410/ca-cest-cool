const userServices = require("../services/userService");
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');

// Create User
exports.createUser = async (req, res) => {
    // sanitize permets de nétoyer les données reçu et éviter les injections
    const { email, password } = req.body.body;
    try {
        userServices.createUser(email, password);
    } catch (error) {

    }
}

// Find User
exports.user = async (req, res) => {
    const { email, password } = req.body.body;

    try {

        const user = await userServices.findUser(email, password);

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