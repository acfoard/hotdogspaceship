module.exports = function(connection, Sequelize) {
    const comments = connection.define('comments', {
      text: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  
    comments.associate = function(models) {
      comments.belongsTo(models.game, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'cascade'
      });
      comments.belongsTo(models.user, {
        foreignKey: {
          allowNull: false
        },
        onDelete: 'cascade'
      });
    }
  
    return comments;
}