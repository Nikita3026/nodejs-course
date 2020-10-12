const router = require('express').Router();
const boardsService = require('./board.service');
/* const tasksService = require('../tasks/task.service'); */
const uuid = require('uuid');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getById(req.params.id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const boardData = await boardsService.createBoard({
    ...req.body,
    id: uuid()
  });
  res.json(boardData);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.changeBoard(req.body, req.params.id);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  res.status(200).json({ message: 'Board was deleted' });
});

/* // tasks
router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  res.json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const tasks = await tasksService.getById(
    req.params.taskId,
    req.params.boardId
  );
  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const taskData = { ...req.body, id: uuid(), boardId: req.params.boardId };
  await tasksService.addTask(taskData);
  res.json(taskData);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = await tasksService.changeTask(
    req.body,
    req.params.taskId,
    req.params.boardId
  );
  res.json(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.taskId, req.params.boardId);
  res.status(200).json({ message: 'Task was deleted' });
});
 */
module.exports = router;
