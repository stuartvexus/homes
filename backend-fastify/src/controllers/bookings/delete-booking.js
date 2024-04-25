import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";


export const deleteBooking = async function (req, res) {
  const { id } = req.params;
  try {
    const token = authBearerToken(req);
    const user_id = userIdToken(token);
    const booking = await Booking.findOneAndDelete({ booking_id: id, user_id });
    if (!booking) {
      res.status(404).send({});
    }
   
    const user = await User.findOne({ user_id });
    user.bookings = user.bookings.filter(i => i !== Booking.Booking_id);
    user.save();

    res.status(200).send({ data: { ...Booking.toObject() } });
    return;
  } catch (error) {
    res.send(error);
  }
};
