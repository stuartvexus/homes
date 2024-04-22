import FastifyCors from "@fastify/cors";

export const setFastifyCors = function (fastify) {
  fastify.register(FastifyCors, {
    // put your options here
    origin: "*",
  });
};
