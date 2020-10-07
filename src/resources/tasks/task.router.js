const router = require('express').Router();
/* const Task = require('./task.model'); */
const tasksService = require('./task.service');
const uuid = require('uuid');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:boardId').get(async (req, res) => {
  const tasks = await tasksService.getAllByBoardId(req.params.boardId);
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const tasks = await tasksService.getById(req.params.id);
  res.json(tasks);
});

router.route('/').post(async (req, res) => {
  const taskData = { ...req.body, id: uuid() };
  await tasksService.addTask(taskData);
  res.json(taskData);
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.changeTask(req.body, req.params.id);
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.id);
  res.status(200).json({ message: 'Task was deleted' });
});

module.exports = router;
