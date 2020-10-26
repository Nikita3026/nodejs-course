const tasksService = require('../tasks/task.service');
const Board = require('./board.model');

const getAll = async () => {
  const boards = await Board.find({});
  return boards;
};

const getById = async id => {
  const board = await Board.findById(id);
  return board;
};

const createBoard = async boardData => {
  const newBoard = new Board(boardData);
  await newBoard.save();
  return newBoard;
};

const changeBoard = async (newBoardData, id) => {
  const updatedBoard = await Board.findByIdAndUpdate(id, newBoardData, {
    new: true
  });
  return updatedBoard;
};

const deleteBoard = async id => {
  await tasksService.deleteTasksByBoardId(id);
  await Board.findByIdAndDelete(id);
};

module.exports = { getAll, getById, createBoard, changeBoard, deleteBoard };
