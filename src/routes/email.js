const emailControler = require("../controlers/emailControler") 

async function emailRoute(server) {
    server.post('/send', emailControler.sendEmail)
}

module.exports = emailRoute