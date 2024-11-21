const fastify = require('fastify')({logger: true})
const emailRoute =  require("./routes/email") 

fastify.register(emailRoute)

fastify.listen({ port: 3000 }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
  })