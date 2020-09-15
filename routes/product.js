const express = require("express");
const router = express.Router();

const { userById } = require("../controllers/user");
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  relatedList,
  categoriesList
} = require("../controllers/product");
const { requireSignIn, isAuth, isAdmin } = require("../controllers/auth");

router.get("/products", list);
router.get("/products/related/:productId", relatedList);
router.get("/product/:productId", read);
router.get("/products/categories", categoriesList);

router.post("/product/create/:userId", requireSignIn, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requireSignIn,
  isAuth,
  isAdmin,
  update
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
