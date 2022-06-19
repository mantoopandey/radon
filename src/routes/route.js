const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW= require("../middlewares/auth1")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", commonMW.authenticate, commonMW.authorise, userController.getUserData)
// router.post("/users/:userId/posts",  userController.postMessage)

router.put("/users/:userId", commonMW.authenticate, commonMW.authorise, userController.updateUser)
router.delete('/users/:userId', commonMW.authenticate, commonMW.authorise, userController.deleteUser)
router.post("/userPost/:userId/posts", commonMW.authenticate, commonMW.authorise, userController.postMessage)
module.exports = router;