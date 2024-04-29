import { bookingProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";

export const getBookingOpts = (fastify,handler) => ({
  preValidation: [fastify.authenticate],
  schema: {
    response: {
      200: responseSuccess({ data: bookingProperties }),
      400: responseError(),
      404: responseError({
        status: 404,
        message: "Error: Book not found!",
      }),
    },
  },
  handler: handler,
});

export const getBookingsOpts = (handler) => ({
  
  schema: {
    response: {
      200: responseSuccess({
        data: {
          type: "array",
          items: bookingProperties,
        }
      }),
      400: responseError(),
    },
  },
  handler: handler,
});
