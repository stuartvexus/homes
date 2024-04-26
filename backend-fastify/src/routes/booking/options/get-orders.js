/**
 *  Schema for multiple users request
 */
import { bookingProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";


export const getOrdersOpts = (handler, fastify) => ({
  
  //preValidation: [fastify.authenticate],

  schema: {
    response: {
      200: responseSuccess({
        data: {
          type: "array",
          items: {
            type: "object",
            properties: bookingProperties,
          }
        }
      }),
      406: responseError(),
    },
  },
  handler: handler,
});
