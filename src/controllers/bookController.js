const { count } = require("console")
 const BookModel= require("../models/bookModel1")
 const AuthorModel = require('../models/authorModel')

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const authorBook= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
const getCBBooks= async function(req,res){
    let id = await AuthorModel.find({author_name : "Chetan Bhagat"}).select({author_id : 1})
    let book = await BookModel.find({author_id : id[0].author_id})
    res.send({msg:book})
}
const updateBook= async function(req,res){
    let data = await BookModel.findOneAndUpdate({name : "Two states"}, {$set:{price:100}}, {new: true,upsert:true})
    let newdata = await AuthorModel.find({author_id : data.author_id}).select("author_name")
    let price = data.price
    res.send({author_name: newdata, price :price})
    
}
const bookNew = async function(req, res){
    let bookRange = await BookModel.find({price:{$lte:50, $gte:100}}).select({ author_id :1})
    let arr = []
    for (let i=0; i<bookRange.length ; i++){
        let authorName = await AuthorModel.findOne({author_id: bookRange[i].author_id}).select({author_name:1, author_id:1, _id:0})
        arr.push(authorName)
    }
    res.send({msg:arr})
    
}
// const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let bookList= await BookModel.find().select({ bookName: 1, authorName: 1})
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // // WHEN AWAIT IS USED: - database + axios
    // //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
//     res.send({msg: bookList})

// }
// const getbookyr = async function(req,res) {
//     let publishyr = req.body.year
//     let bookyr = await BookModel.find({year : publishyr})
//     res.send({msg : bookyr})
// }
// const getXINRBooks = async function(req,res) {
//     let price = await BookModel.find({ "prices.indianPrice":{$in:["INR100","INR200","INR500"]} })
//     res.send({msg : price})
// }
// const getRandomBooks= async function(req,res) {
//     let getRandomBooks = await BookModel.find({$or : [{stockAvailable:true},{totalPages:500}]})
//     res.send({msg : getRandomBooks})
// }
// const getParticularBooks= async function(req,res) {
//     let condition = req.body
//     let getParticularBooks = await BookModel.find(condition)
//     res.send({msg : getParticularBooks})
// }const priceUpdate = async function(req, res){


module.exports.createBook= createBook
module.exports.authorBook= authorBook
module.exports.getCBBooks= getCBBooks
module.exports.updateBook = updateBook
module.exports.bookNew = bookNew
// module.exports.getbookyr = getbookyr
// module.exports. getXINRBooks = getXINRBooks 
// module.exports.getRandomBooks =getRandomBooks
// module.exports.getParticularBooks = getParticularBooks