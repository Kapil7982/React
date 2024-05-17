const { Instructor } = require('../models');

exports.createInstructor = async (req, res) => {
    const { name, departmentId } = req.body;
    try {
        const result = await Instructor.create(name, departmentId);
        res.status(201).json({ message: 'Instructor created successfully', instructorId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.findAll();
        res.json(instructors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Other instructor-related methods...
