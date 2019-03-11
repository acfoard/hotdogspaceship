
const bcrypt = require('bcrypt');
require('dotenv').config();
const db = require('../models/');
const jwt = require('jsonwebtoken');
checkAuth = require('../check-auth');

//signup and login

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
            sub: dbUser.dataValues.id
          }, 
          process.env.JWT_KEY,
          {
            expiresIn: "1hr"
          } );   
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
  
  //dummy route that includes the checkAuth
  app.get('/api/product', checkAuth, (req,res,next) =>{
    console.log('success');
    res.send({
      message: 'Success'
    });
  })

    // GET ROUTES
    app.get('/api/users', function (req, res) {
        db.user.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/users/:id', checkAuth, function (req, res) {
        db.user.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/games', function (req, res) {
        db.game.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/games/:id', function (req, res) {
        db.game.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/comments', checkAuth,  function (req, res) {
        db.comments.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/comments/:id', checkAuth,  function (req, res) {
        db.comments.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/ratings', checkAuth,  function (req, res) {
        db.ratings.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/ratings/:id', checkAuth,  function (req, res) {
        db.ratings.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/scores', checkAuth,  function (req, res) {
        db.scores.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/scores/:id', checkAuth,  function (req, res) {
        db.scores.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });

    // POST ROUTES

    app.post('/api/user/signup', (req, res, next) =>{
        db.user.findOne({where: {username: req.body.username}})
        .then(dbUser =>{
          if(!dbUser){
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
          } if (dbUser) {
            return res.status(400).json({
              message: "username already exists"
            })
          }
         } 
        )
      });
    
      app.post('/api/user/login', (req, res, next) =>{
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

    app.post('/api/games', function (req, res) {
        db.game.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/comments', checkAuth, function (req, res) {
        db.comments.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/ratings', checkAuth, function (req, res) {
        db.ratings.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/scores', checkAuth, function (req, res) {
        db.scores.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });

    // UPDATE ROUTES

    app.put('/api/users/:id', function (req, res) {
        db.user.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function () {
            res.json({ data });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.put('/api/comments/:id', function (req, res) {
        db.comments.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function () {
            res.json({ data });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.put('/api/ratings/:id', function (req, res) {
        db.ratings.update(
            req.body,
            { where: { id: req.params.id } }
        ).then(function () {
            res.json({ data });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

    // DELETE ROUTES

    app.delete('/api/users/:id', function (req, res) {
        db.user.destroy({
            where: { id: req.params.id }
        }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.delete('/api/comments/:id', checkAuth, function (req, res) {
        db.comments.destroy({
            where: { id: req.params.id }
        }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.delete('/api/ratings/:id', checkAuth, function (req, res) {
        db.ratings.destroy({
            where: { id: req.params.id }
        }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

}
