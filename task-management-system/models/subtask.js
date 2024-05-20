const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Subtask', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    task_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    timestamps: true,
    paranoid: true
  });
};
