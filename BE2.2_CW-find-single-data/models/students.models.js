const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentRegistrationNumber: String,
  studentId: String,
  studentName: String,
  fatherGuardianName: String,
  class: String,
  emergencyNumber: String,
  studentProfileImageUrl: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
