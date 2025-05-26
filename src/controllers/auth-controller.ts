import { Request, Response } from "express"
import * as AuthServices from "../services/auth-services"
import { resCookie } from "../utils/cookie";

export const registerNewUser = async (req: Request, res: Response) => {
    const user = req.body;

    const httpResponse = await AuthServices.registerNewUserService(user);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const loginUser = async (req: Request, res: Response) => {
    const userLoginCredentials = req.body;

    const httpResponse = await AuthServices.loginUserService(userLoginCredentials);
    
    resCookie(res, httpResponse.body);
    res.status(httpResponse.statusCode).json(httpResponse.body);
}