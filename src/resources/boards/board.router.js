const router = require('express').Router();
const boardsService = require('./board.service');
const tasksService = require('../tasks/task.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(item => item.toResponse()));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  res.status(board ? 200 : 404).json(board ? board.toResponse() : board);
});

router.route('/').post(async (req, res) => {
  const boardData = await boardsService.createBoard(req.body);
  res.json(boardData.toResponse());
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.changeBoard(req.body, req.params.id);
  res.json(board.toResponse());
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  res.status(200).json({ message: 'Board was deleted' });
});

// tasks
router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks.map(item => item.toResponse()));
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = await tasksService.getById(
    req.params.taskId,
    req.params.boardId
  );
  res.status(task ? 200 : 404).json(task ? task.toResponse() : task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const taskData = await tasksService.addTask({
    ...req.body,
    boardId: req.params.boardId
  });
  res.json(taskData.toResponse());
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await tasksService.changeTask(
    req.body,
    req.params.taskId,
    req.params.boardId
  );
  res.json(task.toResponse());
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.taskId, req.params.boardId);
  res.status(200).json({ message: 'Task was deleted' });
});

module.exports = router;
