
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main(remetente, texto, titulo, html) {
    
    let usuario = 'sisresifpb@gmail.com'
    let senha = 'sistemadereserva'

    const transport = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: usuario,
            pass: senha
        }

    })

    let resp = transport.sendMail({
        from: usuario,
        to: remetente,
        subject: titulo,
        text: texto,
        html: html
    })

    console.log('Message sent: %s', resp.messageId);

}

main().catch(console.error);

module.exports = main