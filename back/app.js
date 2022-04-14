require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongose = require('mongoose');

const user = process.env.USER;
const pass = process.env.PASS;
const cluster = process.env.URL;
const db = process.env.DB;
console.log(pass, db)
mongose.connect('mongodb://' + cluster + '/' + db,
    {
        pass,
        user: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('connexion'))
    .catch((e) => console.log(e, 'connexion failed'));

// const todosRoutes = require('./routes/todos');
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const comentRoutes = require('./routes/coment');


const app = express();

app.use(express.json());

app.use(cors({
    origin: '*'
}));

app.use('/ping', (req, res) => {
    res.status(200).send('ping OK');
});

// app.use('/api/cacestcool/todos', todosRoutes);
app.use('/api/cacestcool/users', userRoutes);
app.use('/api/cacestcool/post', postRoutes);
app.use('/api/cacestcool/coment', comentRoutes);



module.exports = app;
