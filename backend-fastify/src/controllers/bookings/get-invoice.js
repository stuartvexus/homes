import { Property } from "../../models/property.js";
import { Invoice } from "../../models/invoice.js";

export const getInvoice = async function (req, res) {
  const { id } = req.params;
  try {
    const property = await Invoice.findOne({ invoice_id: id });
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getInvoices = async function (req, res) {
  
  try {
	let property = []
    const invoices = await Invoice.find().sort({createdAt:-1});
	for(var invoice of invoices){
		const r = {}
		
		const book = await Book.findOne({booking_id:invoice.booking_id})
		r.book = book
		const house = await Property.findOne({property_id:invoice.property_id})
		r.property = house
		property.push({...r,...invoice})
		
	}
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getUserInvoice = async function (req, res) {
  const user = req.params.id
  try {
    const property = await Invoice.find({user_id:user}).sort({createdAt:-1});
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};