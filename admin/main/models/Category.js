const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
{
	creator:{type:String, required: true},
    name: {type: String , required:true, unique:true },
    parentCategory:{type:String,},
    img:{type:String,default:"uploads/category.jpg"},
    categories: { type: Array },
	status: { type: Boolean,default:true },
    
},
{timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);