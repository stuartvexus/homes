import { Property } from "../../models/property.js";
import { Booking } from "../../models/book.js";

export const getBooking = async function (req, res) {
  const { id } = req.params;
  try {
    const property = await Booking.findOne({ booking_id: id });
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getBookings = async function (req, res) {
  
  try {
    const property = await Booking.find().sort({createdAt:-1});
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getUserBookings = async function (req, res) {
  const {user} = req.params 
  try {
    const property = await Booking.find({user_id:user}).sort({createdAt:-1});
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};