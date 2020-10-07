const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);
const getById = (taskId, boardId) => tasksRepo.getById(taskId, boardId);
const addTask = taskData => tasksRepo.addTask(taskData);
const changeTask = (newTaskData, taskId, boardId) =>
  tasksRepo.changeTask(newTaskData, taskId, boardId);
const deleteTask = (taskId, boardId) => tasksRepo.deleteTask(taskId, boardId);
const deleteTasksByBoardId = boardId => tasksRepo.deleteTasksByBoardId(boardId);
const updateIdOfDeletedUser = userId => tasksRepo.updateIdOfDeletedUser(userId);

module.exports = {
  getAll,
  getById,
  addTask,
  changeTask,
  deleteTask,
  deleteTasksByBoardId,
  updateIdOfDeletedUser
};
