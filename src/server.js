"use strict";
const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const app = express();

app.use(express.json());
app.use(logger);

// Routes
app.get('/person', validator, (req, res) => {
  const { name } = req.query;
  res.json({ name });
});

// Error handlers
app.use('/*',notFoundHandler);
app.use(errorHandler);

module.exports = {
  app,
  start(port) {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  },
};