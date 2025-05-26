import { Response } from "express";

export async function resCookie (res: Response, token: string) {
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict'
    })
}