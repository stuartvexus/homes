import { invoiceProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";

export const getIncomeOpts = (fastify,handler) => ({
  //preValidation: [fastify.authenticate],
  schema: {
    response: {
      200: responseSuccess({ data: invoiceProperties }),
      400: responseError(),
      404: responseError({
        status: 404,
        message: "Error: Book not found!",
      }),
    },
  },
  handler: handler,
});

export const getIncomesOpts = (fastify,handler) => ({
  schema: {
    response: {
      200: responseSuccess({
        data: {
          type: "array",
          items: invoiceProperties,
        }
      }),
      400: responseError(),
    },
  },
  handler: handler,
});