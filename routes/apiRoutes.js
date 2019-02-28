const bcrypt = require('bcrypt');
require('dotenv').config();
const db = require('../models/');
const jwt = require('jsonwebtoken');
checkAuth = require('../check-auth');

module.exports = function(app){
  app.post('/api/signup', (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error :err
        });
      } else {
        const user = {
          username: req.body.username,
          password: hash
        }
        db.user.create(user)
        .then(function(dbUser) {
          res.json(dbUser);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
      }
    }); 
  });

  app.post('/api/login', (req, res, next) =>{
    db.user.findOne({where: {username: req.body.username}})
    .then(dbUser =>{
      if(!dbUser){
        res.status(401).json({
          message: 'Auth failed'
        });
      } 
      bcrypt.compare(req.body.password, dbUser.password, (err, result) => {
        if (err) {
          res.status(401).json({
            message: 'Auth failed'
          });
        }
        if (result) {
          const token = jwt.sign({
            username: db.user.username
          }, 
          process.env.JWT_KEY,
          {
            expiresIn: "1hr"
          } )
          return res.status(200).json({
            message: 'Auth successful',
            token: token
          });
        }
        res.status(401).json({
          message: 'Auth failed'
        })
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  })
  app.get('/api/product', checkAuth, (req,res,next) =>{
    console.log('success');
    res.send({
      message: 'Success'
    })
    .catch(err => {
      res.status(500).json({
        err: err
      });
    })
  })
}

