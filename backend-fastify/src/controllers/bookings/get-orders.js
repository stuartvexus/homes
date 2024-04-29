import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";


export const getOrders = async function (req, res) {
  
  const orders = await Booking.find();
  for(var order of orders){
    const user = await User.findOne({user_id:order.user_id})
    order = {...user,order}
  }
  res.status(200).send({ data: orders });
};
	
  
export const getUserOrders = async function (req, res) {
  const token = authBearerToken(req);
  const user_id = userIdToken(token);
  try {
    const bookings = await Booking.find({user_id:user_id}).sort({createdAt:-1});
	let property= []
	for(var book of bookings){
		
		if(book.property_id){
			const house = await Property.findOne({property_id:book.property_id})
			book.property = house
		}
		
		property.push(book)
	}
    res.status(200).send({ data: property });
  } catch (error) {
	  console.log(error)
    res.status(500).send('SERVER ERROR');
  }
};