import { Response } from "express";

export async function resCookie (res: Response, tokenJwt: string) {
    res.cookie('token', tokenJwt, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict'
    })
}