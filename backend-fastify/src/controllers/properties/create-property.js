import { v4 as uuidv4 } from "uuid";
import { Property } from "../../models/property.js";
import { User } from "../../models/user.js";
import { authBearerToken } from "../../utils/requests.js";
import { userIdToken } from "../../utils/users.js";

export const createProperty = async function (req, res) {
  const { name, address, type, position,images } = req.body;
  if (!name || !address || !type || !position) {
    res.status(400).send({ message: "Error: Required fields are missing." });
    return;
  }
  const token = authBearerToken(req);
  const user_id = userIdToken(token);

  try {
    if(images){
      console.log(images)
    }
    const newProperty = new Property({
      property_id: uuidv4(),
      user_id,
      images:images,
      ...req.body,
    });
    if(user_id !== "superadmin"){
      const user = await User.findOne({ user_id });
      user.properties.push(newProperty.property_id);
      await user.save();
    }
    

    await newProperty.save();
    

    res.status(201).send({ data: newProperty });
  } catch (error) {
    res.send(error);
  }
};
