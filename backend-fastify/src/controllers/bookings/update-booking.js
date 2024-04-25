import { Booking } from "../../models/book.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const updateBooking = async function (req, res) {
  const booking_id= req.params.id;
  if (!booking_id) {
    res.status(404).send({ message: "Error: Can't update unknown booking" });
  }
  const {
    name,
    phone,
  } = req.body;
  const $set = {
    // Fields to update
    ...(name !== undefined && { name }),
    ...(address !== undefined && { address }),
    
  };
  try {
    const token = authBearerToken(req);
    const user_id = userIdToken(token);
    const options = { useFindAndModify: false, new: true, runValidators: true };
    const property = await Booking.findOneAndUpdate(
      { booking_id },
      { $set },
      options
    );
    if (!property) {
      res.status(404).send({ message: "Error: Can't update unknown booking" });
      return;
    }
    res.status(201).send({
      data: { ...property.toObject() },
      message: "Success: Booking is updated.",
    });
  } catch (error) {
    res.send(error);
  }
};
