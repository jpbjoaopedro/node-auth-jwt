import bcrypt from "bcrypt";

export const genHashedPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    return hashedPassword
}

export const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
    return bcrypt.compare(plainPassword, hashedPassword);
}