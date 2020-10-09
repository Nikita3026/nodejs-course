const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const createUser = userData => usersRepo.createUser(userData);
const getById = id => usersRepo.getById(id);
const changeUser = (newUserData, id) => usersRepo.changeUser(newUserData, id);
const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, createUser, getById, changeUser, deleteUser };
