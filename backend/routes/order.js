const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToHistory } = require("../controllers/user");
const { updateSold } = require("../controllers/product");
const { create, getOrderList } = require("../controllers/order");

router.get("/order/list/:userId", requireSignIn, isAuth, isAdmin, getOrderList);
router.post(
  "/order/create/:userId",
  requireSignIn,
  isAuth,
  addOrderToHistory,
  updateSold,
  create
);

router.param("userId", userById);

module.exports = router;
