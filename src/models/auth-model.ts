import { User } from "../types/User";
import { UserLoginCredentials } from "../types/UserLoginCredentials";
import { genHashedPassword, comparePasswords } from "../utils/bcrypt";
import fs from "fs";

const filePath = "./src/data/users.json";
const encode = "utf-8"
const data = fs.readFileSync(filePath, encode);
const jsonData = JSON.parse(data);

export const createUser = async (user: User) => {
    const hashedUserPassword = await genHashedPassword(user.password)
    user.password = hashedUserPassword;
    jsonData.push(user);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
}

export const loginUser = async (userLoginCredentials: UserLoginCredentials) => {
    const userFindedByEmail = await jsonData.find((user: User) => user.email === userLoginCredentials.email);

    if (!userFindedByEmail) {
        return null;
    }

    const isValidCredential = await comparePasswords(userLoginCredentials.password, userFindedByEmail.password);

    if (isValidCredential) {
        return userFindedByEmail;
    } else {
        return null
    }
}