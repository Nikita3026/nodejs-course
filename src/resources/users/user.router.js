const router = require('express').Router();
/* const User = require('./user.model'); */
const usersService = require('./user.service');
/* const uuid = require('uuid'); */

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(item => item.toResponse()));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);
  res.status(user ? 200 : 404).json(user.toResponse());
});

router.route('/').post(async (req, res) => {
  const userData = await usersService.createUser(req.body);
  res.json(userData.toResponse());
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.changeUser(req.body, req.params.id);
  res.json(user.toResponse());
});

router.route('/:id').delete(async (req, res) => {
  await usersService.deleteUser(req.params.id);
  res.status(200).json({ message: 'User was deleted' });
});

module.exports = router;
