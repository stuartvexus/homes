import mongoose from "mongoose";


const invoiceSchema = new mongoose.Schema(
  {
    booking_id:{type:String,required:true},
    status:{type:String,default:'pending'},
    property_id: {type:String,required:true},
    user_id: { type: String },
    complete:{type:Boolean,default:false},
    due:{type:Date,default:null},
  },
  {
    timestamps: true,
  }
);
export const Invoice = mongoose.model("Invoice", invoiceSchema);