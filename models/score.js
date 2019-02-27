module.exports = function (connection, Sequelize) {
    const scores = connection.define('scores', {
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    scores.associate = function (models) {
        scores.belongsTo(models.game, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
        scores.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    }

    return scores;
}