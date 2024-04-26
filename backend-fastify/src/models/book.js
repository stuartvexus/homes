import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema(
  {
    booking_id:{type:String,required:true},
    name:{type:String},
    phone:{type:String},
    email: { type: String },
    read: { type: Boolean, default: false },
    property_id: {type:String,required:true},
    user_id: { type: String },
    complete:{type:Boolean,default:false},
	accepted:{type:Boolean,default:false},
	amount:{type:Number},
	status:{type:String,default:"pending"},
    due:{type:Date,default:null},
  },
  {
    timestamps: true,
  }
);
export const Booking = mongoose.model("Booking", bookingSchema);