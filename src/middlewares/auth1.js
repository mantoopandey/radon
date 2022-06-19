const jwt= require("jsonwebtoken");

// // If a token is present then decode the token with verify function
// // verify takes two inputs:
// // Input 1 is the token to be decoded
// // Input 2 is the same secret with which the token was generated
// // Check the value of the decoded token yourself
//

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
  try{
    const token = req.headers["x-auth-token"];
    // if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({status : false ,msg : "token is not present in the headers"});

    const decodedToken = jwt.verify(token,"functionup-radon")
    // if (!decodedToken) return res.send({status : false , msg:"token is not valid"});

    next();
  }
  catch(err){
    return res.status(500).send({status : false , msg:"token is not valid", msg2:err.message});
  }
}


const authorise = function(req, res, next) {
   try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    const decodedToken = jwt.verify(token,"functionup-radon")
    let userToBeModified = req.params.userId
   
    let userLoggedIn = decodedToken.userId

    
    if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next();
}
catch(err){
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
}
}




module.exports.authenticate = authenticate;
module.exports.authorise = authorise;



// module.exports.authtoken=authtoken