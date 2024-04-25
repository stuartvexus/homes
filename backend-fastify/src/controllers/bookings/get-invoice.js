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
    const property = await Invoice.find().sort({createdAt:-1});
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};

export const getUserInvoice = async function (req, res) {
  const {user} = req.params 
  try {
    const property = await Invoice.find({user_id:user}).sort({createdAt:-1});
    res.status(200).send({ data: property });
  } catch (error) {
    res.status(404).send({});
  }
};