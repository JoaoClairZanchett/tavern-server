import express from 'express';
import UsersController from './controllers/UserController'
import ClassesController from './controllers/ClassesController';
import RacesController from './controllers/RacesController';
import SystemsController from './controllers/SystemsController';

const routes = express.Router()
const usersController = new UsersController();
const classesController = new ClassesController();
const racesController = new RacesController();
const systemsController = new SystemsController();

routes.post('/user', usersController.create);
routes.get('/user/:id', usersController.show);

routes.get('/classes', classesController.index);

routes.get('/races', racesController.index);

routes.get('/systems', systemsController.index);
routes.get('/systems/:id', systemsController.show);

export default routes;