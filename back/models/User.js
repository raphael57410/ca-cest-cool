const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    lastname: { type: String, minlength: 3, maxlength: 15 },
    firstname: { type: String, minlength: 3, maxlength: 15 },
    email: { type: String },
    password: { type: String, minlength: 5 },
    profilPicture: { type: String },
    bio: { type: String, minlength: 3, maxlength: 280 },

},
    //{_id: false, timestamp: false}
);

module.exports = mongoose.model('User', userSchema);