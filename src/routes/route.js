const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

 router.post("/createBook", BookController.createBook  )

router.post("/authorBook", BookController.authorBook)
// router.get("/createBook",       BookController.createBook )


// router.get("/bookList",               BookController.getBooksData )


router.post("/getCBBooks", BookController.getCBBooks )

router.post("/updateBook", BookController.updateBook )

router.get("/bookNew", BookController.bookNew )

router.get("/getRandomBooks",)

module.exports = router;