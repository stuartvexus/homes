import { usersRoutes } from "./users/index.js";
import { authRoutes } from "./auth/index.js";
import {bookRoutes,orderRoutes} from "./booking/index.js"
import { propertiesRoutes } from "./properties/index.js";
import { enquiriesRoutes } from "./enquiries/index.js";

export const setFastifyRoutes = function (fastify) {
  fastify.get("/", (_, res) => {
    res.send({ message: 'Hello, world!' })
    //res.send(true);
  });
  fastify.register(orderRoutes, { prefix: "/orders" });
  fastify.register(bookRoutes, { prefix: "/book" });
  fastify.register(usersRoutes, { prefix: "/users" });
  fastify.register(authRoutes, { prefix: "/auth" });
  fastify.register(propertiesRoutes, { prefix: "/properties" });
  fastify.register(enquiriesRoutes, { prefix: "/enquiries" });
};
