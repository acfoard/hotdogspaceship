const db = require('../models');

module.exports = function (app) {

    // GET ROUTES
    app.get('/api/users', function (req, res) {
        db.user.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/users/:id', function (req, res) {
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
    app.get('/api/comments', function (req, res) {
        db.comments.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/comments/:id', function (req, res) {
        db.comments.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/ratings', function (req, res) {
        db.ratings.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/ratings/:id', function (req, res) {
        db.ratings.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });
    app.get('/api/scores', function (req, res) {
        db.scores.findAll({}).then(function (data) {
            res.json(data)
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.get('/api/scores/:id', function (req, res) {
        db.scores.findOne({ where: { id: req.params.id } })
            .then(function (data) {
                res.json(data);
            }).catch(function (error) {
                res.json({ error: error });
            });
    });Ï

    // POST ROUTES
    app.post('/api/users', function (req, res) {
        db.user.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/games', function (req, res) {
        db.game.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/comments', function (req, res) {
        db.comments.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/ratings', function (req, res) {
        db.ratings.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function (error) {
            res.json({ error: error })
        });
    });
    app.post('/api/scores', function (req, res) {
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
    app.delete('/api/comments/:id', function (req, res) {
        db.comments.destroy({
            where: { id: req.params.id }
        }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });
    app.delete('/api/ratings/:id', function (req, res) {
        db.ratings.destroy({
            where: { id: req.params.id }
        }).then(function () {
            res.json({ success: true });
        }).catch(function (error) {
            res.json({ error: error });
        });
    });

}