const Task = require('./task.model');

const getAll = async boardId => {
  const tasks = await Task.find({ boardId });
  return tasks;
};

const getById = async (taskId, boardId) => {
  const task = await Task.findOne({ _id: taskId, boardId });
  return task;
};

const addTask = async taskData => {
  const newTask = new Task(taskData);
  await newTask.save();
  return newTask;
};

const changeTask = async (newTaskData, taskId, boardId) => {
  const updatedTask = await Task.findOneAndUpdate(
    { _id: taskId, boardId },
    newTaskData,
    {
      new: true
    }
  );
  return updatedTask;
};

const deleteTask = async (taskId, boardId) => {
  await Task.findOneAndDelete({ _id: taskId, boardId });
};

const deleteTasksByBoardId = async boardId => {
  await Task.deleteMany({ boardId });
};

const updateIdOfDeletedUser = async userId => {
  const newTask = await Task.updateMany(
    { userId },
    { userId: null },
    {
      new: true
    }
  );
  console.log(newTask);
  return newTask;
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
