const express = require("express");
const router = express.Router();

const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");
const { userById, addOrderToHistory } = require("../controllers/user");
const { updateSold } = require("../controllers/product");
const { create, getOrderList, getStatusList, orderById, updateOrderStatus } = require("../controllers/order");

router.get("/order/list/:userId", requireSignIn, isAuth, isAdmin, getOrderList);
router.get(
  "/order/statusList/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  getStatusList
);

router.post(
  "/order/create/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  addOrderToHistory,
  updateSold,
  create
);

router.put(
  "/order/:orderId/status/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  updateOrderStatus
);

router.param("userId", userById);
router.param("orderId", orderById);

module.exports = router;
