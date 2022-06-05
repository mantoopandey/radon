//const express = require('express');
//const externalModule = require('./logger')

//const router1 = express.Router();



const express = require('express');
const lodash = require('lodash')
const annu = require('../logger/logger')
const vikas1 = require('../util/helper')
const vikas2 = require('../validater/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    annu.welcome()
    vikas1.printDate()
    vikas1.printMonth()
    vikas1.getBatchInfo()

    console.log(vikas2.case1)
    console.log(vikas2.case2)
    console.log(vikas2.case3)

    
    res.send('My first ever api!')
});

router.get('/helo', function (req, res) {
    const nameMonth = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"]
    const chunk = lodash.chunk(nameMonth, 3)
    console.log(chunk)

    const oddNo = [1,3,5,7,9,11,13,15,17,19]
    const tail = lodash.tail(oddNo)
    console.log(tail)

    const arr1 = [1,2,3]
    const arr2 = [1,3,4]
    const arr3 = [1,4,5]
    const arr4 = [1,5,6]
    const arr5 = [1,6,7]
    const mixarr = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(mixarr)

    const movies = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const movie = lodash.fromPairs(movies)
    console.log(movie)
    res.send('Helo there!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;

