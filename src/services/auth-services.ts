import { User } from "../types/User";
import * as HttpResponse from "../utils/http-response";
import * as AuthModel from "../models/auth-model";
import { UserLoginCredentials } from "../types/UserLoginCredentials";
import { genJwt } from "../utils/jsonwebtoken";

export const registerNewUserService = async (user: User) => {
    let response = null;

    if (Object.keys(user).length !== 0) {
        await AuthModel.createUser(user);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
};

export const loginUserService = async (userLoginCredentials: UserLoginCredentials) => {
    let response = null;
    
    const user = await AuthModel.loginUser(userLoginCredentials);

    if (user) {
        const tokenJwt = await genJwt(user.id, user.role);
        
        response = HttpResponse.ok(tokenJwt);
    } else {
        response = HttpResponse.unauthorized();
    }

    return response
}