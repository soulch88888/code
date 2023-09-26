import { Router } from 'express';
import { updateUser, getUsers, getUserById, deleteUser ,addUser} from '../controllers/UserController.js';

const usersRoute = Router(); // Use Router instead of express.Router()

usersRoute.put('/updateUser/:id', updateUser);
usersRoute.delete('/deleteUser/:id', deleteUser);
usersRoute.get('/getUsers', getUsers);
usersRoute.get('/getUser/:id', getUserById);
usersRoute.post('/addUser', addUser);

export default usersRoute;
