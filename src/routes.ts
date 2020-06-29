import express from 'express';
import UsersController from './controllers/UserController'

const routes = express.Router()
const usersController = new UsersController();

routes.post('/user', usersController.create);
routes.get('/user/:id', usersController.show);

export default routes;