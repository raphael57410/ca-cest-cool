const comentServices = require("../services/comentService");

// Create User
exports.createComent = async (req, res) => {
    try {
        comentServices.createComent(req.body.body);
        res.status(201).send('le commentaire a été crée!');
    } catch (error) {
        console.log(error);
    }
}