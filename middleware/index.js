// daftarkan controller auth.js
var express = require('express');
var auth = require('./auth');
var router = express.Router();

// daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);

// daftarkan login jwt
router.post('/api/v1/login', auth.login);

module.exports = router;