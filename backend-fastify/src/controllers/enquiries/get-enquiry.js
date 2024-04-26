import { Enquiry } from "../../models/enquiry.js";

export const getEnquiry = async function (req, res) {
  const { id } = req.params;
  try {
    const enquiry = await Enquiry.findOne({ enquiry_id: id });
    if (!enquiry) {
      res.status(404).send({ message: "Can't find Enquiry." });
      return;
    }
	let user;
	if(enquiry.users.from.user_id !== 'superadmin'){
		user = await User.findOne({user_id:enquiry.users.from.user_id})
	}else{
		user = {user_id:"superadmin",fullName:"superadmin"}
	}
    res.status(200).send({ data: enquiry,user:user });
  } catch (error) {
    res.status(400).send(error);
  }
};
