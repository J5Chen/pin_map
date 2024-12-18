const { Router } = require('express');
const userRouter = Router();
const { postUser, getAllUsers, getUserById, patchUser, deleteUserById } = require('../controllers/userController');

userRouter.post('/:name', (req, res) => postUser(req, res));
userRouter.get('/', (req, res) => getAllUsers(req, res));
userRouter.get('/:userId', (req, res) => getUserById(req, res));
userRouter.patch('/:userId', (req, res) => patchUser(req, res));
userRouter.delete('/:userId', (req, res) => deleteUserById(req, res));

module.exports = userRouter;
