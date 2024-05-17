const { Department } = require('../models');

exports.createDepartment = async (req, res) => {
    const { name } = req.body;
    try {
        const result = await Department.create(name);
        res.status(201).json({ message: 'Department created successfully', departmentId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getDepartments = async (req, res) => {
    try {
        const departments = await Department.findAll();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Other department-related methods...
