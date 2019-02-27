module.exports = function(connection, Sequelize) {
    const user = connection.define('user', {
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    user.associate = function(models) {
      user.hasMany(models.comments);
      user.hasMany(models.ratings);
      user.hasMany(models.scores);

    }
  
    return user;
  }