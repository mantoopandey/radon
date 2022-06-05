const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

const moviesList = ['Rang de basanti','Lhe shining','Lord of the rings','Batman begins']

router.post("/movies", function(req, res) {
    
    console.log(moviesList);
    res.send({data:moviesList})
})


router.get("/movies/:indexNumber", function(req, res) {

    
    
const moviesList = ['Rang de basanti','Lhe shining','Lord of the rings','Batman begins']

    if ((req.params.indexNumber < moviesList.length)){
        var movieName = moviesList[req.params.indexNumber]
    }else{
        movieName = "his not a part of movie list"
    }
    
    res.send(  { movie:movieName , status: true } )
})





router.get("/films", function(req, res) {
    const films=[{
        "id":1,
        "name":"the shining"
    },
    {
     "id":2,
     "name":"incendies"
    },
    {
     "id":3,
     "name":"rang de basanti"
    },
    {
     "id":4,
     "name":"finding nemo"
    }]
    res.send(  { data: films , status: true }  )
})


router.get("/films/:filmId" , function(req, res) {

    const films=[{
        "id":1,
        "name":"the shining"
    },
    {
     "id":2,
     "name":"incendies"
    },
    {
     "id":3,
     "name":"rang de basanti"
    },
    {
     "id":4,
     "name":"finding nemo"
    }]
    let ids = req.params.filmId
    if(req.params.filmId <= films.length){
        for (let i = 0; i < films.length; i++) {
        
            if (req.params.filmId == films[i].id){
                var filmName = films[i]
            }
    }
         
     }else{
        var filmName = "id is not valid"
    }
    res.send({data:filmName, status:true})
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})


router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;

router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason