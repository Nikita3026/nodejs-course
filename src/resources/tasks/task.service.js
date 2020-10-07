const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const getAllByBoardId = boardId => tasksRepo.getAllByBoardId(boardId);
const getById = id => tasksRepo.getById(id);
const addTask = taskData => tasksRepo.addTask(taskData);
const changeTask = (newTaskData, id) => tasksRepo.changeTask(newTaskData, id);
const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = {
  getAll,
  getAllByBoardId,
  getById,
  addTask,
  changeTask,
  deleteTask
};
