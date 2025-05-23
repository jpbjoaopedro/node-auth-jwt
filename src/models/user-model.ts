import fs from "fs";
import { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
    const filePath = "./src/data/users.json";

    const data = await fs.promises.readFile(filePath, "utf-8");
    const user: User[] = JSON.parse(data);

    return user;
}