import nodemailer from 'nodemailer'

import config from './config'

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        type: 'OAuth2',
        ...config
    }
});

const send = ({ email, name, body }) => {
    const to = name && email ? `${name} <${email}>` : `${name || email}`
    const message = {
        from: 'sih2020biet@gmail.com',
        to,
        subject: `New message from ${to} at creating-contact-forms-with-nodemailer-and-react`,
        body,
        replyTo: to
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    })
}

export default send
