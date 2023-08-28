import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentNumber: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("student", studentSchema);
export default Student;
