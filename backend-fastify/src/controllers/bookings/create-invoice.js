import { v4 as uuidv4 } from "uuid";
import { Property } from "../../models/property.js";
import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";
import { Invoice } from "../../models/invoice.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const createInvoice = async function (req, res) {
  const  data = req.body;
  const {id} = req.params
  /*if (!name || !phone ) {
    res.status(400).send({ message: "Error: Required fields are missing." });
    return;
  }*/
  const token = authBearerToken(req);
  const user_id = userIdToken(token);

  try {
  const booking = await Booking.findOne({booking_id:id})
  if(!booking){
      res.status(400).send({ message: "Error: Booking not exists." });
      return;
    }
    const property = await Property.findOne({property_id:booking.property_id})
    if(!property){
      res.status(400).send({ message: "Error: Property location no longer exists." });
      return;
    }
	if(booking.accepted === false){
		res.status(400).send({ message: "Error: Booking not approved." });
	}
	const invoice = await Invoice.findOne({booking_id:id,user_id:user_id})
	if(invoice){
		if(!data.status || data.status == '00'){
			invoice.complete = true
			invoice.status = "paid"
      
			booking.complete = true
			booking.status = "paid"
			await invoice.save()
			await booking.save()
			res.status(201).send({data:invoice})
			return
		}
		return res.status(201).send({data:invoice})
	}
  let amt = property ? property.price : booking.amount;
    const newInvoice = new Invoice({
      invoice_id: uuidv4(),
      property_id:booking.property_id,
	  booking_id:id,
    amount : amt,
      user_id,
      ...req.body,
    });
	if(!data.status || data.status == '00' ){
		newInvoice.status = "paid"
		newInvoice.complete= true
		booking.complete = true
		booking.status = "paid"
		await booking.save()
	}
    
    await newBooking.save();
    
    res.status(201).send({ data: newBooking });
  } catch (error) {
    res.send(error);
  }
};
