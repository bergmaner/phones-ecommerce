const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { create } = require("../controllers/category");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");

router.post("/category/create/:userId", requireSignIn, isAuth, isAdmin, create);

router.param("userId", userById);

module.exports = router;
