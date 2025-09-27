const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController")

userRouter.post('/', userController.createUser)
userRouter.get('/', userController.getAllUsers)
userRouter.get('/:id', userController.getUserById)
userRouter.patch('/:id', userController.updateUserById)
userRouter.delete('/:id', userController.deleteUserById)


module.exports = userRouter;