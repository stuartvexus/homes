const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
{
	
    userId: { type: String , required:true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    cart:{type:String},
    amount: { type: Number,required: true },
    address: { type: Object,default:null},
    status: { type: String,default: "pending" },
    merchant_id:{
        type:String,
        default:null
    },
    checkout_id:{
        type:String,
        default:null,
    },
    due:{
        type:Date,
        default:null
    },
},
{timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);