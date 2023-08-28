import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  creditValue: {
    type: Number,
    required: true,
  },
});

const Course = mongoose.model("course", CourseSchema);
export default Course;
