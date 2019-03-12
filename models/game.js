module.exports = function(connection, Sequelize) {
    const game = connection.define('game', {
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  

    game.associate = function(models) {
      game.hasMany(models.comments);
      game.hasMany(models.ratings);
      game.hasMany(models.scores);

    }
  
    return game;
  }