const User = require("../models/user");
const jwt = require('jsonwebtoken');// to generate signed token
const expressJWT = require("express-jwt");//to check authorization
const { errorHandler } = require("../helpers/errorHandler");

exports.signup = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: errorHandler(err)
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;

    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  const {email, password} = req.body;
  User.findOne({email},(err,user) => {
    if(err || !user){
      return res.status(400).json({
        error: "User with that email does not exist"
      })
    }

    if(!user.authenticate(password)){
      return res.status(401).json({
        error: "Email and password does not match"
      })
    }

      const token = jwt.sign({id: user.id}, process.env.JWT_TOKEN)
      res.cookie('t', token, {expire: new Date() + 999})

      const {_id, name, email, role} = user;
      return res.json({token, user: {_id,name,email,role}})

  })
}

exports.signout = (req, res) => {
  res.clearCookie('t');
  res.json({
    message: "Signout Succes"
  })
}
