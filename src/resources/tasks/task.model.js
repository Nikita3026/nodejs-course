const { Schema, model } = require('mongoose');

const Task = new Schema({
  title: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  boardId: {
    type: String,
    required: true
  },
  columnId: {
    type: String
  }
});

function toResponse() {
  const { id, title, order, description, userId, boardId, columnId } = this;
  return { id, title, order, description, userId, boardId, columnId };
}

Task.methods.toResponse = toResponse;

module.exports = model('Task', Task);
