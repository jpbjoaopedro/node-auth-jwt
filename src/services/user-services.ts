import * as HttpResponse from "../utils/http-response"
import * as UserModel from "../models/user-model"

export const getUsersService = async () => {
    const data = await UserModel.getUsers();

    const response = Object.keys(data).length !== 0 ? HttpResponse.ok(data) : HttpResponse.badRequest();
    
    return response
};