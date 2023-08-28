/**
 * @description This function handles error
 * @param {object} res - response object
 * @param {number} resCode - response code
 * @param {string} status - status of the response
 * @param {string} message - message to be sent to frontend
 * @param {object} error - error object
 */
export const handleError = (res, resCode, status, message, error) => {
  res.status(resCode).json({
    status: status,
    message: message,
    error: error.message,
  });
};
