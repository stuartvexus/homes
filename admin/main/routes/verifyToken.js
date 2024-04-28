const jwt = require("jsonwebtoken");
const properties = require("../properties.json")

const verifyToken = (req, res, next) => {
  
    const authHeader = req.headers.token;
    
    if (authHeader) {
      const token = authHeader;
      jwt.verify(token, properties.JWT_SEC, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        req.user = user;
        //console.log(":session",user,authHeader)
        next();
      });
      
    }else if(req.session.user !== undefined){
		req.user = req.session.user;
		next()
	} else {
	  if(req.session){
		  return res.redirect("/login?next="+req.url)
	  }
      return res.status(401).json("You are not authenticated!");
    }
  };

  const verifyTokenAndAuthorization = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();      
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    });
  };

  const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();      
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    });
  };

  module.exports = {
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin,
 };