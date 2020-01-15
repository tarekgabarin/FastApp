const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function generateToken(user_name, password){
  return jwt.sign({
    user_name,
    password
  });
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({status: 'Please log in'});
  return next();
}

module.exports = {
  comparePass,
  generateToken,
  handleResponse,
  loginRequired
};