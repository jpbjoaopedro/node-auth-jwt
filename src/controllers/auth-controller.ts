import { Request, Response } from "express"
import * as HttpResponse from "../utils/http-response";
import * as AuthServices from "../services/auth-services"

export const registerNewUser = async (req: Request, res: Response) => {
    const user = req.body;

    const httpResponse = await AuthServices.registerNewUserService(user);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}