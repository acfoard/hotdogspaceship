const db = require('../models');

const games = [
    {
        "id": 1,
        "title": 'Hotdog Spaceship',
        "description": 'Hotdog Spaceship is the best game you will ever play. Its not the prettiest, or the most difficult, or the easiest but it is the best. Hands down. The best. Suck it, Mario',
        "type": 'Pattern Repeater',
        "createdAt": '1999-01-01 12:00:00',
        "updatedAt": '1999-01-01 12:00:00'
    },
    {
        "id": 2,
        "title": 'Super Trivia Brothers',
        "description": 'Its trivia. About things, but also Ariana Grande',
        "type": 'Trivia',
        "createdAt": '1999-01-01 12:00:00',
        "updatedAt": '1999-01-01 12:00:00'
    },
    {
        "id": 3,
        "title": 'Tetris',
        "description": 'Everyone is well aware of what Tetris is',
        "type": 'Stacking',
        "createdAt": '1999-01-01 12:00:00',
        "updatedAt": '1999-01-01 12:00:00'
    },
]

db.sequelize.sync({
}).then(function(){
    db.game.bulkCreate(games)
        .then(function(rows){
            console.log(`\n\nINSERTED into database\n\n`);
        }).catch(function(err){
            console.log("\n\nError:", err);
        });
})