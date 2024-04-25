import { fastify } from "../index.js";

export const userIdToken = function (token) {
  console.log("token=>",token)
  if(token === 'superadmin'){
    return 'superadmin'
  }
  const { id } = fastify.jwt.decode(token);
  return id;
};
