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
  
    // Add an association to our ProgrammingLanguage model
    game.associate = function(models) {
      game.hasMany(models.comments);
      game.hasMany(models.ratings);
      game.hasMany(models.scores);

    }
  
    return game;
  }