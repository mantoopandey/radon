const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://vikaspandey1993:india%401993@cluster0.iltaadg.mongodb.net/test123?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

const mid= function(req, res, next){
    let currentDate= new Date();
    let dateTime= currentDate.getDate() + "-"
                  +(currentDate.getMonth()+1) + "-"
                  +currentDate.getFullYear() + " "
                  +currentDate.getHours() + ":"
                  +currentDate.getMinutes() + ":"
                  +currentDate.getSeconds(); 
    let ip= req.ip
    let url= req.url
    console.log(`${dateTime}, ${ip}, ${url}`)
    res.send(`${dateTime}, ${ip}, ${url}`)
    next()
}

app.use(mid)

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});