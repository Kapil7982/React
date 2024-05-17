const { Course } = require('../models');

exports.createCourse = async (req, res) => {
    const { name, departmentId, instructorId } = req.body;
    try {
        const result = await Course.create(name, departmentId, instructorId);
        res.status(201).json({ message: 'Course created successfully', courseId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


