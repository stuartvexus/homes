import {
    getBookingsOpts,
    getBookingOpts,
    createBookingOpts,
	createInvoiceOpts,
    updateBookingOpts,
    deleteBookingOpts,
    getIncomeOpts,
  } from "./options/index.js";
  import {
    getUserBookings,
    getBooking,
    createBooking,
	createInvoice,
    updateBooking,
    deleteBooking,
    getBookings,
    getInvoice,
    getUserInvoice,
    getInvoices,
  } from "../../controllers/bookings/index.js";
  
  export const bookRoutes = function (fastify, opts, done) {
    fastify.get("/all/bookings", getBookingsOpts(getBookings));
    fastify.get("/income/all", getIncomeOpts(getInvoices));
    fastify.get("/income/user/:id", getIncomeOpts(getUserInvoice));
    fastify.get("/income/:id", getIncomeOpts(getInvoice));
    fastify.get("/user", getBookingsOpts(getUserBookings));
    fastify.get("/:id", getBookingOpts(getBooking));
    //fastify.post("/", createBookingOpts(fastify, createBooking));
	fastify.post("pay/:id", createInvoiceOpts(fastify, createInvoice));
    fastify.post("/:id", createBookingOpts(fastify, createBooking));
    fastify.patch("/:id", updateBookingOpts(fastify, updateBooking));
    fastify.delete("/:id", deleteBookingOpts(fastify, deleteBooking));
    
    done();
  };
  