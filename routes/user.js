const express = require('express');
const router = express.Router();

const { signup } = require("../controllers/user");
const { signupValidator } = require("../validator");
router.post('/signUp', signupValidator ,signup)

module.exports = router;