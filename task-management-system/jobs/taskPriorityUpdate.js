const cron = require('node-cron');
const { Task } = require('../models');

cron.schedule('0 0 * * *', async () => {
  const tasks = await Task.findAll();
  tasks.forEach(async (task) => {
    task.priority = getPriority(task.due_date);
    await task.save();
  });
});

function getPriority(due_date) {
  const now = new Date();
  const due = new Date(due_date);
  const diffDays = Math.ceil((due - now) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 0;
  if (diffDays <= 2) return 1;
  if (diffDays <= 4) return 2;
  return 3;
}
