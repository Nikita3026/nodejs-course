const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

/* userSchema.methods.toResponse = function () {
  const { id, name, login } = this;
  return { id, name, login };
}; */

module.exports = model('User', userSchema);
