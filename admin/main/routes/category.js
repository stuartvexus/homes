const Category = require("../models/Category");
const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin, 
} = require("./verifyToken");
const CryptoJS = require("crypto-js");

const router= require("express").Router();

router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
      let categories;
  
      if (qNew) {
        categories = await Category.find().sort({ createdAt: -1 }).limit(5);
      } else if (qCategory) {
        categories = await Category.find({
          parentCategory: {
            $in: [qCategory],
          },
        });
      } else {
        categories = await Category.find().sort({ createdAt: -1 });
      }
  
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
router.post("/new", verifyTokenAndAdmin, async (req, res) => {
	if(!req.body.name ){
		res.status(400).json("Mising required data...");
	}
	
    try {
		let img = req.body.img
		const newCategory = new Category(req.body);
		newCategory.creator = req.user._id
    newCategory.img = "uploads/"+img.split("\\")[img.split("\\").length -1]
        const savedProduct = await newCategory.save();
        res.status(200).json(savedProduct);
      } catch (err) {
        res.status(500).json(err);
      }
});
  
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
	
    try {
        let category = await Category.findByIdAndDelete(req.params.id)
        res.status(200).json(category);
      } catch (err) {
        res.status(500).json(err);
      }
});  
module.exports = router;