const uuid = require('uuid');
const tasksService = require('../tasks/task.service');
/* const User = require('./user.model'); */
let USERS = [
  {
    id: uuid(),
    name: 'Nikita',
    login: 'user',
    password: 'P@55w0rd'
  },
  {
    id: uuid(),
    name: 'Sasha',
    login: 'user',
    password: 'P@55w0rd'
  }
];

const getAll = async () => {
  return USERS;
};

const createUser = userData => {
  USERS.push(userData);
  return userData;
};

const getById = id => {
  const user = USERS.filter(item => item.id === id);
  return user[0];
};

const changeUser = (newUserData, id) => {
  const idx = USERS.findIndex(item => item.id === id);
  USERS[idx] = newUserData;
  return USERS[idx];
};

const deleteUser = id => {
  USERS = USERS.filter(item => {
    if (item.id !== id) return true;
    tasksService.updateIdOfDeletedUser(item.id);
    return false;
  });
};

module.exports = { getAll, createUser, getById, changeUser, deleteUser };
