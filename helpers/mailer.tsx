import mailer, { Transport, Transporter, TransportOptions } from 'nodemailer';

async function createNodeMailerTransport(): Promise<Transporter>{
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


export default createNodeMailerTransport