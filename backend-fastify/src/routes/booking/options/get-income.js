import { invoiceProperties } from "./schema.js";
import { responseSuccess, responseError } from "../../../utils/schema/response.js";

export const getIncomeOpts = (handler) => ({
  schema: {
    response: {
      200: responseSuccess({ data: invoiceProperties }),
      400: responseError(),
      404: responseError({
        status: 404,
        message: "Error: Invoice not found!",
      }),
    },
  },
  handler: handler,
});