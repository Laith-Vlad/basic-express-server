"use strict";

function validator(req, res, next) {
  const { name } = req.query;

  if (!name) {
    const error = new Error('No name provided');
    error.statusCode = 500;
    return next(error);
  }
  next();
}

module.exports = validator;