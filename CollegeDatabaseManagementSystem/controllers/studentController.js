const { Student } = require('../models');

exports.createStudent = async (req, res) => {
    const { name, departmentId } = req.body;
    try {
        const result = await Student.create(name, departmentId);
        res.status(201).json({ message: 'Student created successfully', studentId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Other student-related methods...
