const router= require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const properties = require("../properties.json")

//REGISTER
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        name:req.body.name,
		isAdmin: req.body.isAdmin ? req.body.isAdmin: false,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            properties.PASS_SEC
        ).toString(),
    });

    try{
        const user = await User.findOne({isAdmin:true})
        if(!user){
            newUser.isAdmin = true;
        }
        const savedUser = await newUser.save();
		if(savedUser.isAdmin === true){return res.redirect("/login?msg=Account created successfully")}
        return res.status(201).json(savedUser);        
    }
    catch (err) {
        res.status(500).json(err);
    }    
});

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user){ return  res.status(401).send("Wrong credentials")};

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            properties.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(OriginalPassword !==req.body.password){
         return res.status(401).send("Wrong credentials");
        }
         const accessToken = jwt.sign({
            id:user._id,
			_id:user._id,
            isAdmin: user.isAdmin,
         },
        properties.JWT_SEC,
        {expiresIn:"3d"}
    );

         const { password, ...others } = user._doc;
        
		if(user.isAdmin === true){
			user.id = user._id
			req.session.token = accessToken
			req.session.user = user
			req.user = {id:user._id,isAdmin:true}
			return res.redirect("/products")
		}
        return res.status(200).json({...others, token: accessToken});
      } catch(err){
        return res.status(500).json(err);
    }
});

module.exports = router;