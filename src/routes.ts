import { Request, Response, Router } from 'express';

export const router = Router();

router.get('/users', (req: Request, res: Response) => {
    res.status(200).json({message: "A"})
});
