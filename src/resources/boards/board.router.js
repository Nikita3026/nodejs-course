const router = require('express').Router();
const boardsService = require('./board.service');
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
  const boardData = { ...req.body, id: uuid() };
  await boardsService.createBoard(boardData);
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

module.exports = router;
