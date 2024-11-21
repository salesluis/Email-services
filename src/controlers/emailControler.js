const nodemailer = require("nodemailer");
const Queue = require("../queue");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  
const queue = new Queue

async function sendEmail(request, reply) {
  const { fistname, lastname, email} = request.body 
  const template = `olá ${fistname} ${lastname}! Passando para avisar que deu tudo certo e esta email é a confirmação`
  queue.enqueue(email) 
  while (!filaDeEmails.isEmpty()){
    const email = await queue.dequeue(email) 
    const mailOptions = {
      from: process.env.EMAIL, // Remetente
      to: 'destinatario@example.com', // Destinatário
      subject: 'Assunto do email', // Assunto
      text: template, // Corpo do email em texto plano
      html: '<b>Corpo do email em HTML</b>', // Corpo do email em HTML
      attachments: [{
        filename: 'arquivo.pdf',
        path: './caminho/para/o/arquivo.pdf'
      }]
    };
  }

  try{
    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso!');
  } catch{
    console.error('Erro ao enviar email:', error);
    // Adicionar o email de volta à fila para tentar enviar novamente mais tarde
    queue.enqueue(email);
  }
}   

module.exports = {
    sendEmail
}
    

