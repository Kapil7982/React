const db = require('../config/db');

const User = {
    create: async (username, password, roleId) => {
        const [rows] = await db.query('INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)', [username, password, roleId]);
        return rows;
    },
    findByUsername: async (username) => {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    },
    
};

const Role = {
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM roles');
        return rows;
    },
    
};

const Department = {
    create: async (name) => {
        const [rows] = await db.query('INSERT INTO departments (name) VALUES (?)', [name]);
        return rows;
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM departments');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM departments WHERE id = ?', [id]);
        return rows[0];
    },
   
};

const Instructor = {
    create: async (name, departmentId) => {
        const [rows] = await db.query('INSERT INTO instructors (name, department_id) VALUES (?, ?)', [name, departmentId]);
        return rows;
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM instructors');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM instructors WHERE id = ?', [id]);
        return rows[0];
    },
    
};

const Course = {
    create: async (name, departmentId, instructorId) => {
        const [rows] = await db.query('INSERT INTO courses (name, department_id, instructor_id) VALUES (?, ?, ?)', [name, departmentId, instructorId]);
        return rows;
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM courses');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM courses WHERE id = ?', [id]);
        return rows[0];
    },
   
};

const Student = {
    create: async (name, departmentId) => {
        const [rows] = await db.query('INSERT INTO students (name, department_id) VALUES (?, ?)', [name, departmentId]);
        return rows;
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM students');
        return rows;
    },
    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM students WHERE id = ?', [id]);
        return rows[0];
    },
  
};


const Enrollment = {
    create: async (studentId, courseId, enrollmentDate) => {
        const [rows] = await db.query('INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES (?, ?, ?)', [studentId, courseId, enrollmentDate]);
        return rows;
    },
    findAll: async () => {
        const [rows] = await db.query('SELECT * FROM enrollments');
        return rows;
    },
    findByStudentId: async (studentId) => {
        const [rows] = await db.query('SELECT * FROM enrollments WHERE student_id = ?', [studentId]);
        return rows;
    },
   
};

module.exports = { User, Role, Department, Instructor, Course, Student, Enrollment };
