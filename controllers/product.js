const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const { errorHandler } = require("../helpers/errorHandler");

const Product = require("../models/product");

exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req, res) => {
  req.product.image = undefined;
  return res.json(req.product);
};

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    const { name, description, price, category, quantity, shipping } = fields;

    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !quantity ||
      !shipping
    ) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    let product = new Product(fields);

    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).jsonn({
          error: "Image should be less than 1MB",
        });
      }

      product.image.data = fs.readFileSync(files.image.path);
      product.image.contentType = files.image.type;
    }
    product.save((err, result) => {
      if (err) {
        return (
          res,
          status(400).json({
            error: errorHandler(err),
          })
        );
      }
      res.json(result);
    });
  });
};

exports.remove = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.json({
      deletedProduct,
      message: "Product deleted succesfully",
    });
  });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }

    let product = req.product;
    product = _.extend(product, fields);

    if (files.image) {
      if (files.image.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1MB",
        });
      }

      product.image.data = fs.readFileSync(files.image.path);
      product.image.contentType = files.image.type;
    }
    product.save((err, result) => {
      if (err) {
        return (
          res,
          status(400).json({
            error: errorHandler(err),
          })
        );
      }
      res.json(result);
    });
  });
};

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : "asc";
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;

  Product.find()
    .select("-image")
    .populate("category")
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

exports.relatedList = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;

  Product.find({ _id: { $ne: req.product }, category: req.product.category })
    .limit(limit)
    .populate("category", "_id name")
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json(products);
    });
};

exports.categoriesList = (req, res) => {
  Product.distinct("category", {}, (err, categories) => {
    if (err) {
      return res.status(400).json({
        error: "Categories not found",
      });
    }
    res.json(categories);
  });
};

exports.searchList = (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = parseInt(req.body.skip);
  let findArgs = {};

  for (let key in req.body.filters) {
    if (req.body.filters[key].length > 0) {
      if (key === "price") {
        // gte -  greater than price [0-10]
        // lte - less than
        findArgs[key] = {
          $gte: req.body.filters[key][0],
          $lte: req.body.filters[key][1],
        };
      } else {
        findArgs[key] = req.body.filters[key];
      }
    }
  }

  Product.find(findArgs)
    .select("-image")
    .populate("category")
    .sort([[sortBy, order]])
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: "Products not found",
        });
      }
      res.json({
        size: data.length,
        data,
      });
    });
};

exports.image = (req, res, next) => {
  if (req.product.image.data) {
    res.set("Content-Type", req.product.image.contentType);
    return res.send(req.product.image.data);
  }
  next();
};

exports.searchQuery = (req, res) => {
  const query = {};

  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: "i" };
  }
  if (req.query.category && req.query.category === "All") {
    query.category = req.query.category;
  }

  Product.find(query, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    return res.json(products);
  });
};

exports.updateSold = (req, res, next) => {
  let bulkOps = req.body.order.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });
  Product.bulkWrite(bulkOps, {}, (error, products) => {
    if (error)
      return res.status(400).json({
        error: "Could not update product",
      });
    next();
  });
};
