// src/middlewares/roleMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import * as HttpResponse from '../utils/http-response';

export const roleMiddleware = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = req.user;

    const httpResponse = await HttpResponse.forbidden();

    if (!user || !roles.includes(user.role)) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
      return;
    }

    next();
  };
}
