const express = require('express');
const router = express.Router();

const { userResgisterValidator } = require('../validators/auth');
const { runValidation } = require('../validators/index');
// import from controllers
const { register } = require('../controllers/auth');

router.post('/register', userResgisterValidator, runValidation, register);

module.exports = router;
