const uuid = require('uuid');
let TASKS = [
  {
    id: '1',
    title: 'title',
    order: 'order',
    description: 'description',
    userId: 'id',
    boardId: '1bc0dcc1-0e13-40ae-bab9-001e486e83f4',
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

const getAll = boardId => {
  const tasks = TASKS.filter(item => item.boardId === boardId);
  return tasks;
};

const getById = (taskId, boardId) => {
  const task = TASKS.filter(
    item => item.id === taskId && item.boardId === boardId
  );
  return task[0];
};

const addTask = taskData => {
  TASKS.push(taskData);
  return taskData;
};

const changeTask = (newTaskData, taskId, boardId) => {
  const idx = TASKS.findIndex(
    item => item.id === taskId && item.boardId === boardId
  );
  TASKS[idx] = newTaskData;
  return TASKS[idx];
};

const deleteTask = (taskId, boardId) => {
  TASKS = TASKS.filter(item => item.id !== taskId || item.boardId !== boardId);
};

const deleteTasksByBoardId = boardId => {
  TASKS = TASKS.filter(item => item.boardId !== boardId);
};

const updateIdOfDeletedUser = userId => {
  TASKS = TASKS.map(item => {
    if (item.userId === userId) {
      const newItem = item;
      newItem.userId = null;
      return newItem;
    }
    return item;
  });
};

module.exports = {
  getById,
  addTask,
  changeTask,
  deleteTask,
  getAll,
  deleteTasksByBoardId,
  updateIdOfDeletedUser
};
