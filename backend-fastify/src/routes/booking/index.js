import {
    getBookingsOpts,
    getBookingOpts,
    createBookingOpts,
	createInvoiceOpts,
    updateBookingOpts,
    deleteBookingOpts,
    getIncomeOpts,
    getOrdersOpts,
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
    getOrders,
  } from "../../controllers/bookings/index.js";
  
  export const bookRoutes = function (fastify, opts, done) {
    fastify.get("/", getBookings);
    fastify.get("/income/all", getIncomeOpts(fastify,getInvoices));
    fastify.get("/income/user/:id", getIncomeOpts(fastify,getUserInvoice));
    fastify.get("/income/:id", getIncomeOpts(fastify,getInvoice));
    fastify.get("/user", getBookingsOpts(getUserBookings));
    fastify.get("/:id", getBookingOpts(fastify,getBooking));
    //fastify.post("/", createBookingOpts(fastify, createBooking));
	fastify.post("pay/:id", createInvoiceOpts(fastify, createInvoice));
    fastify.post("/:id", createBookingOpts(fastify, createBooking));
    fastify.patch("/:id", updateBookingOpts(fastify, updateBooking));
    fastify.delete("/:id", deleteBookingOpts(fastify, deleteBooking));
    
    done();
  };
  
  export const orderRoutes = (fastify,opts,done) =>{
      fastify.get("/",getOrders);
      done();
  }