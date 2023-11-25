const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
  courseName: { type: String, required: true },
});

const Course = model('Course', courseSchema);

module.exports = Course;