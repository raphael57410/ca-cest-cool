const comentServices = require("../services/comentService");

// Create User
exports.createComent = async (req, res) => {
    try {
        const newComent = await comentServices.createComent(req.body.body);
        res.status(201).send({ newComent });
    } catch (error) {
        console.log(error);
    }
}