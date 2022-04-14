const Coment = require("../models/Coment");

// create new Coment
exports.createComent = async (data) => {
    const { post, user, coment, like } = data;
    const newComent = new Coment();

    newComent.user = user;
    newComent.post = post;
    newComent.coment = coment;
    newComent.like = like;
    newComent.save();

    console.log('je crée un nouveau commentaire');
}