/* eslint-disable no-undef */
const corsMiddleware = (res) => {
  // Which site is allowed to make a connection, in the below the "*" indicating that any site can make a connection
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // What are the methods that the connection can perform in the API
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
};

module.exports = corsMiddleware;
