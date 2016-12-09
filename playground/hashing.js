const { SHA256 } = require('crypto-js');

const message = 'I am somebody from somewhere';
const hash = SHA256(message).toString();

console.log(`Message: '${message}'`);
console.log(`Hash: '${hash}'`);

// JWT: JSON Web Token 

const data = {
  id: 7
};

const token = {
  data,

  // add 'somesecret' as the salt?
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
};

// simulate tampering
token.data.id = 3;
token.hash = SHA256(JSON.stringify(token.data)).toString();

const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

console.log(`Token: ${JSON.stringify(token, undefined, 2)}`);
console.log(`resultHash: ${resultHash}`);

if (resultHash === token.hash) {
  console.log('Data was not changed');
}
else {
  console.log('Data was changed. Don\'t trust!');
}
