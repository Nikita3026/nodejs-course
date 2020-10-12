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

module.exports = model('Board', boardSchema);
