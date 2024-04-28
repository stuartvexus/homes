import { Enquiry } from "../../models/enquiry.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const getEnquiries = async function (req, res) {
  const token = authBearerToken(req);
  const user_id = userIdToken(token);

  try {
    let list = [];
    console.log(user_id)
    if(user_id){
     list = await Enquiry.find({
        $or: [
          { 'users.from.user_id': user_id, 'users.from.keep': true },
          { 'users.to.user_id': user_id, 'users.to.keep': true },
        ]
      });
    }else{
      list = await Enquiry.find({}).sort({createdAt:-1})
    }
    
    
    res.status(200).send({ data: list });
  } catch (error) {
    res.status(400).send(error);
  }
};
