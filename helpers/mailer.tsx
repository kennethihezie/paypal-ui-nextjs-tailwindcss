import mailer, { Transport, Transporter, TransportOptions } from 'nodemailer';

async function createNodeMailerTransport(): Promise<Transporter>{
    return mailer.createTransport({
        pool: true,
        host: 'subsonicinvestment.com',
        port:  465,
        secure: true,
        auth: {
            user: 'support@subsonicinvestment.com',
            pass: 'Subsonic@1.0'
        }
    })
}


export default createNodeMailerTransport