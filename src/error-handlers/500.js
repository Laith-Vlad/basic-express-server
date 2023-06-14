"use strict";
function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message || 'Server Error');
}

module.exports = errorHandler;