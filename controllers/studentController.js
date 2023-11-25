// src/controllers/studentController.js
const Student = require('../models/studentModel');

async function addStudent(req, res) {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function removeStudent(req, res) {
  try {
    const student = await Student.findOneAndDelete({ id: req.params.id });
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function modifyStudent(req, res) {
  try {
    const student = await Student.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    res.send(student);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getStudentById(req, res) {
    try {
      const student = await Student.findOne({ id: req.params.id });
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: 'Student not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching student details' });
    }
  }
  
  async function getAllStudents(req, res) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching students' });
    }
  }

module.exports = {
  addStudent,
  removeStudent,
  modifyStudent,
  getStudentById,
  getAllStudents
};
