const express = require('express');
const { insertData, loginData } = require('../controllers/user');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Sign Up' });
})
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
})

router.post('/reg-data', insertData);
router.post('/login-data', loginData);

module.exports = router;