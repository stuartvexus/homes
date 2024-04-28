const router= require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const properties = require("../properties.json")

//REGISTER
router.post("/register", async (req,res)=>{
    
    try{
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
    
        const savedUser = await newUser.save();
		if(savedUser){return res.redirect("/login?msg=Account created succesffuly")}
        return redirect("superuser");        
    }
    catch (err) {
        req.session.error = err.message
        return redirect("superuser");
    }    
});

//LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        if(!user){ 
            req.session.error="Wrong credentials"
            return res.redirect("/login")
        };

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            properties.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(OriginalPassword !==req.body.password){
            req.session.error="Invalid credentials"
            return res.redirect("/login")
        }
         
        const { password, ...others } = user._doc;
        
		const accessToken = jwt.sign({
            id:user._id,
			_id:user._id,
            isAdmin: user.isAdmin,
         },
        properties.JWT_SEC,
        {expiresIn:"3d"}
    );
        user.id = user._id
        req.session.token = accessToken
        req.session.user = user
        req.user = {id:user._id,isAdmin:true}
        req.session.success ="Login succesfull"
        return res.redirect("/superuser")
		
        
      } catch(err){
        req.session.error = err.message
        return res.redirect("/superuser")
    }
});

module.exports = router;