const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');
const departmentController = require('../controllers/departmentController');
const enrollmentController = require('../controllers/enrollmentController');
const instructorController = require('../controllers/instructorController');
const studentController = require('../controllers/studentController');
const { verifyToken } = require('../middlewares/authMiddleware');
const { checkRole } = require('../middlewares/roleMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Course routes
router.post('/courses', verifyToken, checkRole(['admin', 'super-admin']), courseController.createCourse);
router.get('/courses', verifyToken, courseController.getCourses);

// Department routes
router.post('/departments', verifyToken, checkRole(['admin', 'super-admin']), departmentController.createDepartment);
router.get('/departments', verifyToken, departmentController.getDepartments);

// Enrollment routes
router.post('/enrollments', verifyToken, enrollmentController.createEnrollment);
router.get('/enrollments', verifyToken, enrollmentController.getEnrollments);

// Instructor routes
router.post('/instructors', verifyToken, checkRole(['admin', 'super-admin']), instructorController.createInstructor);
router.get('/instructors', verifyToken, instructorController.getInstructors);

// Student routes
router.post('/students', verifyToken, checkRole(['admin', 'super-admin']), studentController.createStudent);
router.get('/students', verifyToken, studentController.getStudents);

// Define other routes...

module.exports = router;
