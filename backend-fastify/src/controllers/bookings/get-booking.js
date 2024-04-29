import { Property } from "../../models/property.js";
import { Booking } from "../../models/book.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const getBooking = async function (req, res) {
  const { id } = req.params;
  if(!id){
	res.status(400).json({message:"No Id"})
		return
  }
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
		if(book.property_id){
			const house = await Property.findById(book.property_id)
			r.property = house
		}
		r.user = user
		
		property.push(r)
	}
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getUserBookings = async function (req, res) {
	const token = authBearerToken(req);
  const user_id = userIdToken(token);
  
  try {
    const bookings = await Booking.find({user_id:user_id}).sort({createdAt:-1});
	let property= []
	for(var book of bookings){
		
		if(book.property_id){
			const house = await Property.findById(book.property_id)
			book.property = house
		}
		
		property.push(book)
	}
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};