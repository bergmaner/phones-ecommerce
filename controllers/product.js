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

      const {name,description, price, category, quantity, shipping} = fields;

      if(!name || !description || !price || !category || !quantity || !shipping ){
          return res.status(400).json({
              error: "All fields are required"
          })
      }

      let product = new Product(fields);

      if(files.image){

        if(files.image.size > 1000000){
            return res.status(400).jsonn({
                error: "Image should be less than 1MB"
            })
        }

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

