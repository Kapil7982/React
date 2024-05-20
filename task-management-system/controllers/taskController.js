const { Task, Subtask } = require('../models');
const { Op } = require('sequelize');

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date } = req.body;
    const user_id = req.user.id; 

    const task = await Task.create({ title, description, due_date, user_id, priority: getPriority(due_date) });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const { priority, due_date, page = 1, limit = 10 } = req.query;
    const user_id = req.user.id;
    const filters = { user_id };

    if (priority) filters.priority = priority;
    if (due_date) filters.due_date = { [Op.eq]: new Date(due_date) };

    const tasks = await Task.findAndCountAll({
      where: filters,
      limit: parseInt(limit),
      offset: (page - 1) * limit
    });

    res.json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const { due_date, status } = req.body;
    const task = await Task.findByPk(task_id);

    if (!task) return res.status(404).json({ error: 'Task not found' });

    if (due_date) {
      task.due_date = due_date;
      task.priority = getPriority(due_date);
    }
    if (status) task.status = status;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { task_id } = req.params;
    const task = await Task.findByPk(task_id);

    if (!task) return res.status(404).json({ error: 'Task not found' });

    await Subtask.destroy({ where: { task_id } });
    await task.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

function getPriority(due_date) {
  const now = new Date();
  const due = new Date(due_date);
  const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 0;
  if (diffDays <= 2) return 1;
  if (diffDays <= 4) return 2;
  return 3;
}
