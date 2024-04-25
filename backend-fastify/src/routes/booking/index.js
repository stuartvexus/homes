import {
    getBookingsOpts,
    getBookingOpts,
    createBookingOpts,
    updateBookingOpts,
    deleteBookingOpts,
    getIncomeOpts,
  } from "./options/index.js";
  import {
    getUserBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,
    getBookings,
    getInvoice,
    getUserInvoice,
    getInvoices,
  } from "../../controllers/bookings/index.js";
  
  export const bookRoutes = function (fastify, opts, done) {
    fastify.get("/", getBookingsOpts(getBookings));
    fastify.get("/income/all", getIncomeOpts(getInvoices));
    fastify.get("/income/user/:id", getIncomeOpts(getUserInvoice));
    fastify.get("/income/:id", getIncomeOpts(getInvoice));
    fastify.get("/user/:id", getBookingOpts(getUserBookings));
    fastify.get("/:id", getBookingOpts(getBooking));
    //fastify.post("/", createBookingOpts(fastify, createBooking));
    fastify.post("/:id", createBookingOpts(fastify, createBooking));
    fastify.patch("/:id", updateBookingOpts(fastify, updateBooking));
    fastify.delete("/:id", deleteBookingOpts(fastify, deleteBooking));
    
    done();
  };
  