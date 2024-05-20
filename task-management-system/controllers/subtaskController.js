const { Subtask } = require('../models');

exports.createSubtask = async (req, res) => {
  try {
    const { task_id } = req.body;
    const subtask = await Subtask.create({ task_id });
    res.status(201).json(subtask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllSubtasks = async (req, res) => {
  try {
    const { task_id } = req.query;
    const filters = {};

    if (task_id) filters.task_id = task_id;

    const subtasks = await Subtask.findAll({ where: filters });
    res.json(subtasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateSubtask = async (req, res) => {
  try {
    const { subtask_id } = req.params;
    const { status } = req.body;
    const subtask = await Subtask.findByPk(subtask_id);

    if (!subtask) return res.status(404).json({ error: 'Subtask not found' });

    if (status !== undefined) subtask.status = status;

    await subtask.save();
    res.json(subtask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteSubtask = async (req, res) => {
  try {
    const { subtask_id } = req.params;
    const subtask = await Subtask.findByPk(subtask_id);

    if (!subtask) return res.status(404).json({ error: 'Subtask not found' });

    await subtask.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
