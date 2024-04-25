const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User")
const Cart = require("../models/Cart")
const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin, 
} = require("./verifyToken");
const CryptoJS = require("crypto-js");

const router= require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const data = req.body
    if(!data.pay){
      res.status(400).json({message:"Payment Incomplete"})
    }
    if(!data.cart){
      res.status(400).json({message:"Missing required data"})
    }
    try {
        const order = await Order.findOne({userId:req.user.id,status:"pending"})
        if(order){
          if(data.pay.merchantRequestId){
            await Order.findByIdAndUpdate(order._id,{$set:{merchant_id:data.pay.merchantRequestId,checkout_id:data.pay.checkoutRequestId,due:new Date(),status:"paid"}})
            await Cart.findByIdAndDelete(data.cart._id)
            res.status(200).json({message:"Order chekout success"})
          }else{
            res.status(400).json({message:"Payment incomplete"})
          }
        }
        const newOrder = new Order();
        newOrder.userId = req.user.id
        newOrder.amount = data.cart.total_price
        newOrder.cart = data.cart._id
        newOrder.products = data.cart.products
        if(data.pay.merchantRequestId){
            newOrder.status = "paid"
            newOrder.merchant_id = data.pay.merchantRequestId
            newOrder.checkout_id = data.pay.checkoutRequestId   
            newOrder.due = new Date()         
            await Cart.findByIdAndDelete(data.cart._id)
            
        }else{
          newOrder.status = "pending"
        }
        const savedOrder = await newOrder.save();
        res.status(200).json({order:savedOrder,message:"Order created"});
      } catch (err) {
        console.log(err)
        res.status(500).json(err);
      }
    });

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedOrder);
      } catch (err) {
        res.status(500).json(err);
      }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET USER ORDERS
  router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL
  router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
	  const result = {}
	  result.orders = []
      const orders = await Order.find().sort({createdAt:-1});
	  for(var order of orders){
		  const r = {}
		  var user = await User.findById(order.userId).select("-password")
		  r.order = order
		  r.user = user
		  r.products = []
		  for(var i of order.products){
			  var item = await Product.findById(i.productId)
			  r.products.push(item)
		  }
		  result.orders.push(r)
	  }
      res.status(200).json(result);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

  // GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
	const result ={}
    try {
	  const orders = await Order.find().sort({createdAt:-1})
	  const products = await Product.find().sort({createdAt:-1})
	  result.products = products
	  result.orders = orders
	  result.pending = []
	  result.amount = 0
	  result.invoice = 0
	  for(var order of orders){
		  if(order.status === "pending"){
			  result.pending.push(order)
		  }else{
			  result.amount += order.amount
		  }
		  result.invoice += order.amount
	  }
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
	  
	  result.income = income
      res.status(200).json(result);
    } catch (err) {
	  console.log(err)
      res.status(500).json(err);
    }
  });
  
module.exports = router;