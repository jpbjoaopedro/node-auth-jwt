import { Request, Response, NextFunction } from "express";
import * as HttpResponse from '../utils/http-response';
import { decodeJwt } from "../utils/jsonwebtoken";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const token = req.cookies?.token;

    let response = null;

    if (!token) {
        response = await HttpResponse.unauthorized();
        res.status(response.statusCode).json(response.body);
        return;
    }

    try {
        const decodedToken = await decodeJwt(token);
        req.user = decodedToken;
        next();
    } catch {
        response = await HttpResponse.unauthorized();
        res.status(response.statusCode).json(response.body);
        return;
    }
}