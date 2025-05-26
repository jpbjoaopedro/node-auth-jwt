import jwt from "jsonwebtoken";
const secret_key = process.env.SECRET_KEY_JWT;

export const genJwt = async (id: number, role: string) => {
    if (!secret_key) {
        throw new Error('SECRET_KEY_JWT environment variable is not set');
    }
    
    const token = jwt.sign({
        id: id,
        role: role
    },
        secret_key,
    {
        expiresIn: '1h'
    }
    );

    return token
}