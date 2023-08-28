import Enrollment from "../models/Enrollment.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";

export const report = async (req, res, next) => {
  try {
    const enrollment = await Enrollment.aggregate([
      {
        $lookup: {
          from: "courses",
          localField: "courseCode",
          foreignField: "courseCode",
          as: "course",
        },
      },
      {
        $unwind: "$course",
      },
      {
        $lookup: {
          from: "students",
          localField: "studentNumber",
          foreignField: "studentNumber",
          as: "student",
        },
      },
      {
        $unwind: "$student",
      },
      {
        $group: {
          _id: "$studentNumber",
          courses: { $push: { course: "$course", marks: "$marks" } },
          student: { $first: "$student" },
        },
      },
    ]);
    console.log(enrollment);
    handleResponse(
      res,
      200,
      "success",
      "Report generated successfully",
      enrollment
    );
  } catch (error) {
    handleError(
      res,
      500,
      "error",
      "An error occured while generating report",
      error
    );
  }
};
