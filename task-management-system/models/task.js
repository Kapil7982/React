const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('TODO', 'IN_PROGRESS', 'DONE'),
      allowNull: false,
      defaultValue: 'TODO'
    }
  }, {
    timestamps: true,
    paranoid: true
  });
};
