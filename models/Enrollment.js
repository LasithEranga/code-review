import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  studentNumber: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    required: false,
  },
});

const Enrollment = mongoose.model("enrollment", EnrollmentSchema);
export default Enrollment;
