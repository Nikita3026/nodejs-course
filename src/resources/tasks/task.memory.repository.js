const uuid = require('uuid');
let TASKS = [
  {
    id: uuid(),
    title: 'title',
    order: 'order',
    description: 'description',
    userId: 'id',
    boardId: 'id',
    columnId: 'id'
  },
  {
    id: uuid(),
    title: 'title',
    order: 'order',
    description: 'description',
    userId: 'i',
    boardId: 'i',
    columnId: 'i'
  }
];

const getAll = () => {
  return TASKS;
};

const getAllByBoardId = boardId => {
  const tasks = TASKS.filter(item => item.boardId === boardId);
  return tasks;
};

const getById = id => {
  const task = TASKS.filter(item => item.id === id);
  return task;
};

const addTask = taskData => {
  TASKS.push(taskData);
  return taskData;
};

const changeTask = (newTaskData, id) => {
  const idx = TASKS.findIndex(item => item.id === id);
  TASKS[idx] = newTaskData;
  return TASKS[idx];
};

const deleteTask = id => {
  TASKS = TASKS.filter(item => item.id !== id);
};

module.exports = {
  getAllByBoardId,
  getById,
  addTask,
  changeTask,
  deleteTask,
  getAll
};
