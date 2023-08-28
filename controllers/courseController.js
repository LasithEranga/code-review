import Course from "../models/Course.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";

export const newCourse = async (req, res, next) => {
  try {
    const { courseCode, title, creditValue } = req.body;
    const course = new Course({
      courseCode,
      title,
      creditValue,
    });
    await course.save();
    handleResponse(res, 200, "success", "Course created successfully", course);
  } catch (error) {
    console.log(error);
    handleError(
      res,
      500,
      "error",
      "An error occured while storing course details",
      error
    );
  }
};
