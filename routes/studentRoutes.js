// src/routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/students', studentController.addStudent);
router.delete('/students/:id', studentController.removeStudent);
router.put('/students/:id', studentController.modifyStudent);
router.get('/students/:id', studentController.getStudentById);  // New API route to get specific student details
router.get('/students', studentController.getAllStudents);      // New API route to get all students

module.exports = router;
