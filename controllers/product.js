const formidable = require("formidable");
const fs = require("fs");
const _ = require("lodash");
const { errorHandler } = require("../helpers/errorHandler");

const Product = require("../models/product");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
      if(err){
          return res.status(400).json({
              error: "Image could not be uploaded"
          })
      }
      let product = new Product(fields);

      if(files.image){
          product.image.data = fs.readFileSync(files.image.path)
          product.image.contentType = files.image.type;
      }
      product.save((err,result) =>{
        if(err){
            return res,status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(result);
    })
  })
};

