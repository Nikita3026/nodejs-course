const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const uuid = require('uuid');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const userData = { ...req.body, id: uuid() };
  await usersService.createUser(userData);
  res.json(User.toResponse(userData));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.changeUser(req.body, req.params.id);
  res.json(user);
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  res.status(200).json({ message: 'User was deleted' });
});

module.exports = router;
