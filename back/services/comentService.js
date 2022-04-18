const Coment = require("../models/Coment");

// create new Coment
exports.createComent = async (data) => {
    const { postId, currentUser, coment } = data;
    const newComent = new Coment();

    // TODO: vérifier que le commentaire n'est pas vide!
    newComent.user = currentUser;
    newComent.post = postId;
    newComent.coment = coment;
    newComent.like = [];
    newComent.save();
}