module.exports = function (connection, Sequelize) {
    const ratings = connection.define('ratings', {
        rating: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    ratings.associate = function (models) {
        ratings.belongsTo(models.game, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
        ratings.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    }

    return ratings;
}