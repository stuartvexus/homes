import { v4 as uuidv4 } from "uuid";
import { Property } from "../../models/property.js";
import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const createBooking = async function (req, res) {
  const { name, phone } = req.body;
  const {id} = req.params
  if (!id ) {
    res.status(400).send({ message: "Error: Required fields are missing." });
    return;
  }
  const token = authBearerToken(req);
  const user_id = userIdToken(token);

  try {
    const property = await Property.findOne({property_id:id})
    if(!property){
      res.status(400).send({ message: "Error: Property location no longer exists." });
      return;
    }
	const booking = await Booking.findOne({property_id:id,user_id:req.user.id,accepted:false})
	if(booking){
		res.status(200).send({message:"House already booked, awaiting admin approval",data:booking})
		return
	}
    const newBooking = new Booking({
      booking_id: uuidv4(),
      property_id:id,
	  amount:property.price,
	  fullName: name ? name : "User",
	  
      user_id,
      ...req.body,
    });

    const user = await User.findOne({ user_id });
    user.bookings.push(newBooking.booking_id);

    await newBooking.save();
    await user.save();

    res.status(201).send({ data: newBooking });
  } catch (error) {
    res.send(error);
  }
};
