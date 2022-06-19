const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try{
    let data = req.body;
    console.log(data)
    if ( Object.keys(data).length != 0) {
  let savedData = await userModel.create(data);
  //console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  else res.status(400).send({ msg: "BAD REQUEST"})
}
  catch(err){
    console.log("This is the error:", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const loginUser = async function (req, res) {
try{
  let userName = req.body.emailId;
  let password = req.body.password;
  console.log(req.body)
if (Object.keys(req.body).length!=2){
  res.status(400).send({msg: "Bad Request"})
}
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(403).send({msg: "Username or password is incorrect, Forbidden"});
  
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FUnctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
}
catch(err){
  console.log("This is the error:", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  try{
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

    res.send({ status: true, data: userDetails });
  }
  catch(err){
    console.log("This is the error:", err.message)
    res.send({ msg: "Error", error: err.message })
  }

  };


const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases
let header= req.headers
  let userId = req.params.userId;
  try{
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
catch(err){
  console.log("This is the error:", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
}


let deleteUser = async function(req,res){
  let userId = req.params.userId
  try{
  let user= await userModel.findById(userId)
  if(!user){
    return res.send({status: false, mssg: "no such user exists"})
  }

    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, {$set:{isDeleted:true}},{new:true});
    res.send({status :true, data : updatedUser})
  }
  catch(err){
    console.log("This is the error:", err.message)
    res.send({ msg: "Error", error: err.message })
  }
}

const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    
    
    //userId for which the request is made. In this case message to be posted.
    
try{
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}
    catch(err){
      console.log("This is the error:", err.message)
      res.send({ msg: "Error", error: err.message })
    }
  }

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser= deleteUser
module.exports.postMessage = postMessage