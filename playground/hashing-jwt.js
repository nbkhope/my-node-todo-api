const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// JWT: JSON Web Token

// jwt.sign
// jwt.verify

const data = {
  id: 4
};

// Generate token, given data with id and the secret
const token = jwt.sign(data, 'oursecret123456');

console.log(`Token is ${token}`);

const decoded = jwt.verify(token, 'oursecret123456');

console.log(`Decoded is ${JSON.stringify(decoded, null, 2)}`)
