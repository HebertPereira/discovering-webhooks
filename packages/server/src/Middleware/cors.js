/* eslint-disable no-undef */
const corsMiddleware = (res) => {
  // Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // Quais são os métodos que a conexão pode realizar na API
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
};

module.exports = corsMiddleware;
