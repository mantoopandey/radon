const jwt= require("jsonwebtoken");
// const authtoken= async function(req, res, next){
// let token = req.headers["x-Auth-token"];
// if (!token) token = req.headers["x-auth-token"];

// //If no token is present in the request header return error
// if (!token) return res.send({ status: false, msg: "token must be present" });

// console.log(token);

// // If a token is present then decode the token with verify function
// // verify takes two inputs:
// // Input 1 is the token to be decoded
// // Input 2 is the same secret with which the token was generated
// // Check the value of the decoded token yourself
// let decodedToken = jwt.verify(token, "functionup-radon");
// if (!decodedToken)
//   return res.send({ status: false, msg: "token is invalid" });

//   next()
// }

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({status : false ,msg : "token is not present in the headers"});

    const decodedToken = jwt.verify(token,"functionup-radon")
    if (!decodedToken) return res.send({status : false , msg:"token is not valid"});

    next();
}


const authorise = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    const decodedToken = jwt.verify(token,"functionup-radon")
    let userToBeModified = req.params.userId
   
    let userLoggedIn = decodedToken.userId

    
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next();
}




module.exports.authenticate = authenticate;
module.exports.authorise = authorise;



// module.exports.authtoken=authtoken