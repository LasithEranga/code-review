import Student from "../models/Student.js";
import { handleError } from "../utils/handleError.js";
import { handleResponse } from "../utils/handleResponse.js";

export const newStudent = async (req, res, next) => {
  try {
    const { studentNumber, name, address, dob, contactNumber } = req.body;

    const student = new Student({
      studentNumber,
      name,
      address,
      dob,
      contactNumber,
    });
    await student.save();
    handleResponse(
      res,
      200,
      "success",
      "Student created successfully",
      student
    );
  } catch (error) {
    console.log(error);
    handleError(
      res,
      500,
      "error",
      "An error occured while storing student data",
      error
    );
  }
};
