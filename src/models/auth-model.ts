import { json } from "stream/consumers";
import { User } from "../types/User";
import fs from "fs";

export const createUser = async (user: User) => {
    const filePath = "./src/data/users.json";

    const data = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(data);

    jsonData.push(user);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
}