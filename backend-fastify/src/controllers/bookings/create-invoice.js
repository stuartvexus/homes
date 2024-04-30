import { v4 as uuidv4 } from "uuid";
import { Property } from "../../models/property.js";
import { Booking } from "../../models/book.js";
import { User } from "../../models/user.js";
import { Invoice } from "../../models/invoice.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";
import axios from 'axios';

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
		return
	}
	const user = await User.findOne({user_id:user_id})
	if(!user.phone && !data.phone){
		res.status(400).send({ message: "Error: Link phone to your account to proceed." });
		return
	}
	if(data.phone){user.phone = data.phone}
	if(user.phone.startsWith("0")){
		user.phone = user.phone.replace(/^0/,"254")
	}
	if(user.phone.startsWith("7")){
		user.phone = "254"+user.phone
	}
	if(user.phone.startsWith("1")){
		user.phone = "254"+user.phone
	}
	let pay_response = null
	const postData = {
		amount:""+booking.amount,
		accountReference:"REAL ESTATE PURCHASE",
		description:"REAL ESTATE MANAGEMENT",
		callBackURL: "https://pay.weparkafrica.com/query/process",
		phoneNumber:user.phone
	}
	console.log("charge=>",JSON.stringify(postData))
	try{
		pay_response = await axios.post('https://pay.weparkafrica.com/stkpush/process', postData);
		if(pay_response.status == 200){
			console.log("response pay=>",pay_response.data)
			let jsonres = pay_response.data
			if(jsonres.status && jsonres.status !== '00'){
				res.status(pay_response.status).send({message:`Payment could not be processed , status ${jsonres.status} => `+jsonres.message})
			}
			pay_response = pay_response.data
		}
	}catch(e){
		res.status(400).send({message:"Error occured while procesing payment =>"+e})
		return
	}
	
	const invoice = await Invoice.findOne({booking_id:id,user_id:user_id})
	if(invoice){
		if(pay_response && pay_response.status == '00'){
			invoice.complete = true
			invoice.status = "paid"
			invoice.checkoutRequestId = pay_response.checkoutRequestId
			invoice.merchantRequestId = pay_response.merchantRequestId
			booking.complete = true
			booking.status = "paid"
			await invoice.save()
			await booking.save()
			res.status(201).send({data:invoice,message:"Order completed purchase, You own this property"})
			return
		}
		return res.status(201).send({data:invoice,message:"Incomplete payment, invalid response"})
	}
  let amt = property ? property.price : booking.amount;
    const newInvoice = new Invoice({
      invoice_id: uuidv4(),
      property_id:booking.property_id,
	  booking_id:id,
	  checkoutRequestId :pay_response.checkoutRequestId,
	merchantRequestId : pay_response.merchantRequestId,
    amount : amt,
      user_id,
      ...req.body,
    });
	if(pay_response && pay_response.status == '00' ){
		newInvoice.status = "paid"
		newInvoice.complete= true
		booking.complete = true
		booking.status = "paid"
		await booking.save()
	}
    
    await newInvoice.save();
    
    res.status(201).send({ data: newInvoice,message:`Request complete with ${pay_response.status === '00' ? 'Success response' : 'Incomplete payment'}` });
  } catch (error) {
    res.send(error);
  }
};
