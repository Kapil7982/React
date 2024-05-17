const { Enrollment } = require('../models');

exports.createEnrollment = async (req, res) => {
    const { studentId, courseId, enrollmentDate } = req.body;
    try {
        const result = await Enrollment.create(studentId, courseId, enrollmentDate);
        res.status(201).json({ message: 'Enrollment created successfully', enrollmentId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.findAll();
        res.json(enrollments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Other enrollment-related methods...
