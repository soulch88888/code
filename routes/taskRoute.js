import { Router } from 'express';
import { updateTask, getTasks, getTaskById, deleteTask ,addTask} from '../controllers/TaskController.js';

const tasksRoute = Router(); 

tasksRoute.put('/updateTask/:id', updateTask);
tasksRoute.delete('/deleteTask/:id', deleteTask);
tasksRoute.get('/getTasks', getTasks);
tasksRoute.get('/getTask/:id', getTaskById);
tasksRoute.post('/addTask', addTask);

export default tasksRoute;
