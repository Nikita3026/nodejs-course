const uuid = require('uuid');
const tasksService = require('../tasks/task.service');

let BOARDS = [
  {
    id: uuid(),
    title: 'title',
    columns: [{}, {}]
  }
];

const getAll = () => {
  return BOARDS;
};

const getById = id => {
  const board = BOARDS.filter(item => item.id === id);
  return board[0];
};

const createBoard = boardData => {
  BOARDS.push(boardData);
  return boardData;
};

const changeBoard = (newBoardData, id) => {
  const idx = BOARDS.findIndex(item => item.id === id);
  BOARDS[idx] = newBoardData;
  return BOARDS[idx];
};

const deleteBoard = id => {
  BOARDS = BOARDS.filter(item => {
    if (item.id !== id) return true;
    tasksService.deleteTasksByBoardId(item.id);
    return false;
  });
};

module.exports = { getAll, getById, createBoard, changeBoard, deleteBoard };
