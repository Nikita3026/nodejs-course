const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const getById = id => boardsRepo.getById(id);
const createBoard = boardData => boardsRepo.createBoard(boardData);
const changeBoard = (newBoardData, id) =>
  boardsRepo.changeBoard(newBoardData, id);
const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, getById, createBoard, changeBoard, deleteBoard };
