import { Router } from 'express';
import * as AuthContoller from './controllers/auth-controller';
import * as UserController from './controllers/user-controller';

export const router = Router();

router.post('/auth/register', AuthContoller.registerNewUser);
router.post('/auth/login', AuthContoller.loginUser);

router.get('/users', UserController.getUsers);