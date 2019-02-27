const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

require('./routes/apiRoutes.js')(app);

const db = require('./models');

db.sequelize.sync().then(function () {
    console.log('Database is synced!');

    app.listen(PORT, function () {
        console.log(`App is now listening on PORT ${PORT}`)
    });

});