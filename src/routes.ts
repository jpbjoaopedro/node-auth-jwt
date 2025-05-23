import { Request, Response, Router } from 'express';
import * as AuthContoller from './controllers/auth-controller';

export const router = Router();

router.post('/auth/register', AuthContoller.registerNewUser);
