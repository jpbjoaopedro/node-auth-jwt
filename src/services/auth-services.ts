import { User } from "../types/User";
import * as HttpResponse from "../utils/http-response";
import * as AuthModel from "../models/auth-model";

export const registerNewUserService = async (user: User) => {
    let response = null;

    if (Object.keys(user).length !== 0) {
        await AuthModel.createUser(user);
        response = HttpResponse.created();
    } else {
        response = HttpResponse.badRequest();
    }

    return response;
};