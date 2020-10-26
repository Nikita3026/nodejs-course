const tasksService = require('../tasks/task.service');
const User = require('./user.model');

const getAll = async () => {
  const users = await User.find({});
  return users;
};

const createUser = async userData => {
  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

const getById = async id => {
  const user = await User.findById(id);
  return user;
};

const changeUser = async (newUserData, id) => {
  const updatedUser = await User.findByIdAndUpdate(id, newUserData, {
    new: true
  });
  return updatedUser;
};

const deleteUser = async id => {
  tasksService.updateIdOfDeletedUser(id);
  await User.findByIdAndDelete(id);
};

module.exports = { getAll, createUser, getById, changeUser, deleteUser };
