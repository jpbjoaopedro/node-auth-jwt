import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/JwtPayload";
const secret_key = process.env.SECRET_KEY_JWT;

export const genJwt = async (id: number, role: string) => {
    if (!secret_key) {
        throw new Error('SECRET_KEY_JWT environment variable is not set');
    }
    
    const dataToken: JwtPayload = {
        id: id,
        role: role
    }

    const token = jwt.sign(
        dataToken,
        secret_key,
        {
            expiresIn: '1h'
        }
    );

    return token
}