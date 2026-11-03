import { Router } from 'express';
import UsersController from '../controllers/users.controller.js';

const router = Router();

router.get('/', UsersController.getAllUsers);

router.get('/:uid', UsersController.getUser);
router.put('/:uid', UsersController.updateUser);
router.delete('/:uid', UsersController.deleteUser);


export default router;