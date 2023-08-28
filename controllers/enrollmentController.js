import Enrollment from "../models/Enrollment.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";

export const newEnrollment = async (req, res, next) => {
  try {
    const { studentNumber, courseCode, year, marks } = req.body;
    const enrollment = new Enrollment({
      studentNumber,
      courseCode,
      year,
      marks,
    });
    await enrollment.save();
    handleResponse(
      res,
      200,
      "success",
      "Enrollment created successfully",
      enrollment
    );
  } catch (error) {
    console.log(error);
    handleError(
      res,
      500,
      "error",
      "An error occured while storing enrollment details",
      error
    );
  }
};
