const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const morgan = require('morgan');
const { StatusCodes, getStatusText } = require('http-status-codes');

const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

morgan.token('body', req => {
  return JSON.stringify(req.body);
});

morgan.token('query', req => {
  return JSON.stringify(req.query);
});

app.use(express.json());

app.use(morgan(':method :url QueryParams::query Body::body'));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);

process.on('uncaughtException', err => {
  console.log(`Captured ERROR: ${err.message}`);
});

process.on('unhandledRejection', reason => {
  console.log(`Unhandled promise rejection: ${reason.message}`);
});

app.use((req, res, next) => {
  const error = new Error('Not found');
  next(error);
});

app.use((err, req, res) => {
  console.log(`ERROR: ${err.message}`);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json(getStatusText(StatusCodes.INTERNAL_SERVER_ERROR));
});

module.exports = app;
