import dotenv from "dotenv";
import Fastify from "fastify";
import FastifyBcrypt from "fastify-bcrypt";
import FastifyJwt from "@fastify/jwt";
import FastifyMultipart from "@fastify/multipart";
import mongoose from "mongoose";
import FastifyWebsocket from "@fastify/websocket";

// Local Files
import { setFastifySwagger } from "./swagger.js";
import { setFastifyCors } from "./cors.js";
import { setFastifyRoutes } from "./routes/index.js";
import { setFastifyStatic } from "./static.js";
import { setFastifyWebsocket } from "./websocket/index.js";

dotenv.config();

/**
 * The Fastify instance.
 * @type {import('fastify').FastifyInstance}
 */
export const fastify =   Fastify({
  logger: true
})

// We allow Multi Part Form
fastify.register(FastifyMultipart);
// We add Secret Key
fastify.register(FastifyJwt, { secret: process.env.SECRET_KEY || "secret" });
// We add Salt
fastify.register(FastifyBcrypt, {
  saltWorkFactor: Number(process.env.SALT) || 12,
});
// We register Websocket
fastify.register(FastifyWebsocket, {
  options: {
    clientTracking: true
  }
});

// We register authenticate
fastify.decorate("authenticate", async function (request, reply) {
  try {
    await request.jwtVerify();
  } catch (err) {
    reply.send(err);
  }
});
// Generate API documentation
setFastifySwagger(fastify);
// We serve static files -ex uploads/
setFastifyStatic(fastify);
// We allowed cors
setFastifyCors(fastify);
// We register routes
setFastifyRoutes(fastify);
// We set webSocket connection
setFastifyWebsocket();
const db = "mongodb+srv://etolebradone:lovingson23@cluster0.pjipfgw.mongodb.net/dbo";

mongoose
  .connect(db)
  .then(() => {
    console.log("Mongodb connection made")
  })
  .catch((e) => fastify.log.error(e));

fastify.listen({ port: 8000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})