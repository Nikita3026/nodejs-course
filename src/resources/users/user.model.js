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

function toResponse() {
  const { id, name, login } = this;
  return { id, name, login };
}

userSchema.methods.toResponse = toResponse;

module.exports = model('User', userSchema);
