const express  = require('express');
const router = express.Router();
const dotenv = require('dotenv').config();
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
router.post('/', (req, res) => {
    const { name, email, subject, message } = req.body;
    res.redirect('/');
});
const key = process.env.PASSWORD;

router.get('/incoming mails', (req, res) => {
    res.sendFile(__dirname + '/incoming mails.html');
});

module.exports = router;