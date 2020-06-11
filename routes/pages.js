'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

/* GET contact page. */
router.get('/contact', function (req, res) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
