const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    trim: true,
    // this unique thing ONLY WORKS IF you DROP the collection
    // uniqueness won't be enforced unless you drop the whole collection
    // and start from scratch again!!!
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

module.exports = {
  User
};
