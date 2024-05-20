const { Sequelize } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const User = require('./user')(sequelize);
const Task = require('./task')(sequelize);
const Subtask = require('./subtask')(sequelize);

User.hasMany(Task, { foreignKey: 'user_id' });
Task.belongsTo(User, { foreignKey: 'user_id' });
Task.hasMany(Subtask, { foreignKey: 'task_id' });
Subtask.belongsTo(Task, { foreignKey: 'task_id' });

sequelize.sync();

module.exports = { sequelize, User, Task, Subtask };
