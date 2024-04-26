import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";

export const getOrders = async function (req, res) {
  const orders = await Booking.find();
  for(var order of orders){
    const user = await User.findOne({user_id:order.user_id})
    order = {...user,order}
  }
  res.status(200).send({ data: orders });
};
