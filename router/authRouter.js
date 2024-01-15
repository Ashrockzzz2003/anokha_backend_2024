const authController = require('../controller/authController');

const express = require('express');
const authRouter = express.Router();

authRouter.get('/test', authController.testConnection);
authRouter.post('/registerStudent', authController.registerStudent);
authRouter.post('/verifyStudent', authController.verifyStudent);

module.exports = authRouter;