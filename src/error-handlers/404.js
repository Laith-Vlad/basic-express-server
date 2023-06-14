"use strict";
function notFoundHandler(req, res) {
    res.status(404).send('Not Found');
  }
  
  module.exports = notFoundHandler;