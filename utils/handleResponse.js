/**
 * Sends the response to the request
 * @param {*} res
 * @param {number} resCode
 * @param {string} status
 * @param {string} message
 * @param {*} data
 */
export const handleResponse = (res, resCode, status, message, data) => {
  res.status(resCode).json({
    status: status,
    message: message,
    data: data,
  });
};
