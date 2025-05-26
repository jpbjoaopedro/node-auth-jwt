import { Router } from 'express';
import * as AuthContoller from './controllers/auth-controller';
import * as UserController from './controllers/user-controller';
import { authMiddleware } from './middlewares/auth-middleware';
import { roleMiddleware } from './middlewares/roles-middleware';

export const router = Router();

router.post('/auth/register', authMiddleware, roleMiddleware(['admin']), AuthContoller.registerNewUser);
router.post('/auth/login', AuthContoller.loginUser);

router.get('/users', authMiddleware, roleMiddleware(['admin']), UserController.getUsers);