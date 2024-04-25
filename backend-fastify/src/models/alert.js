import mongoose from "mongoose";


const alertSchema = new mongoose.Schema(
  {
    status:{type:String,default:'pending'},
    property_id: {type:String},
    user_id: { type: String },
    description:{type:String},
    price:{type:Number,required:true},
    complete:{type:Boolean,default:false},
    date:{type:Date,default:Date.now()},
  },
  {
    timestamps: true,
  }
);
export const Alert = mongoose.model("Alert", alertSchema);