import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      minlength: 4,
      required: true,
    },
	phone: {
      type: String,
      minlength: 9,
      
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      unique: true,
    },
    password: {
      type: String,
    },
    properties: {
      type: Array,
    },
    bookings:{
      type:Array,
    },
    isAdmin:{
      type:Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
