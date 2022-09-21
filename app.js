const express = require('express');
const server = express();
const multer = require('multer');
const upload = multer();
const validMw = require('./mw/valid')


server.set('view engine', 'ejs');
server.set('views', './views');

// server.use(express.json());
// server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.render('main');
});

server.post('/test', upload.none(), validMw({
    type: 'object',
    properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        email: { type: 'string' },
        birthday: { type: 'string' },
    },
    required: [ 'name', 'login', 'email', 'birthday' ],
    additionalProperties: false
   }), (req, res) => {

});

server.listen(5000, () => {
    console.log('Test Ok');
})