const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController');
const subtaskController = require('../controllers/subtaskController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/register', authController.register);
router.post('/login', authController.login);


router.post('/tasks', authMiddleware, taskController.createTask);
router.get('/tasks', authMiddleware, taskController.getAllTasks);
router.put('/tasks/:task_id', authMiddleware, taskController.updateTask);
router.delete('/tasks/:task_id', authMiddleware, taskController.deleteTask);


router.post('/subtasks', authMiddleware, subtaskController.createSubtask);
router.get('/subtasks', authMiddleware, subtaskController.getAllSubtasks);
router.put('/subtasks/:subtask_id', authMiddleware, subtaskController.updateSubtask);
router.delete('/subtasks/:subtask_id', authMiddleware, subtaskController.deleteSubtask);

module.exports = router;
