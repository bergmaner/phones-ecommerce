const express = require('express');
const router = express.Router();

const { signup, signin, signout } = require("../controllers/user");
const { signupValidator } = require("../validator");

router.post('/signUp', signupValidator ,signup);
router.post('/signIn', signin);
router.get('/signOut', signout)

module.exports = router;