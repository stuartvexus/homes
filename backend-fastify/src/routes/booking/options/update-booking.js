import { bookingProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";

export const updateBookingOpts = (fastify, handler) => ({
  preValidation: [fastify.authenticate],
  schema: {
    response: {
      201: responseSuccess({
        status: 201,
        data: bookingProperties
      }),
      400: responseError(),
      401: responseError({
        status: 401,
        message: "No Authorization was found in request.headers"
      }),
      404: responseError({
        status: 404,
        message: "Error:Booking not found!",
      }),
    },
  },
  handler: handler,
});
