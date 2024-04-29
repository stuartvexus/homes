import { bookingProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";

export const deleteBookingOpts = (fastify, handler) => ({
  preValidation: [fastify.authenticate],
  schema: {
    response: {
      200: responseSuccess({
        message: "Booking deleted!",
        data: bookingProperties
      }),
      400: responseError(),
      401: responseError({
        status: 401,
        message: "No Authorization was found in request.headers"
      }),
      404: responseError({
        status: 404,
        message: "Error: Property not found!",
      }),
    },
  },
  handler: handler,
});
