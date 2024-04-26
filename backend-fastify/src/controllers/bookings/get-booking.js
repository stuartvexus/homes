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
    const bookings = await Booking.find().sort({createdAt:-1});
	let property= []
	for(var book of bookings){
		const r = {}
		r.booking = book
		const user = await User.findById(book.user_id).select("-password")
		const house = await Property.findById(book.property_id)
		r.user = user
		r.property = house
		property.push(r)
	}
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