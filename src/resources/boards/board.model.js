const { Schema, model } = require('mongoose');

const boardSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  columns: {
    type: Array,
    required: true
  }
});

function toResponse() {
  const { id, title, columns } = this;
  return { id, title, columns };
}

boardSchema.methods.toResponse = toResponse;

module.exports = model('Board', boardSchema);
