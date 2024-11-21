const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });
  
async function sendEmail(request, reply) {
    const { fistname, lastname, email} = request.body  

    await transporter.sendMail({
        from: `"Maddison Foo Koch 👻" <${process.env.EMAIL}>`, // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
}   

module.exports = {
    sendEmail
}
    

