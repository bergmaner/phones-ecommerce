const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const { create, categoryById, read } = require("../controllers/category");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");

router.get("/category/:categoryId", read);
router.post("/category/create/:userId", requireSignIn, isAuth, isAdmin, create);

router.param("categoryId", categoryById);
router.param("userId", userById);

module.exports = router;
