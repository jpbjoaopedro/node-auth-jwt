import { Request, Response } from "express";
import * as UserServices from "../services/user-services"

export const getUsers = async (req: Request, res: Response) => {
    const response = await UserServices.getUsersService();

    res.status(response.statusCode).json(response.body);
}