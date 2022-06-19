let axios= require("axios")

let getWeather= async function(req, res){
    try{

        let city=req.query.q
        let id=req.query.appid
        console.log(`query params are: ${city} ${id}`)
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result= await axios(options);
        console.log(result.data)
        res.status(200).send({msg:result.data, status:true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }

}


let getTemp= async function(req, res){
    try{

        let city=req.query.q
        let id=req.query.appid
        console.log(`query params are: ${city} ${id}`)
        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result= await axios(options);
        console.log(result.data)
        res.status(200).send({msg: result.data.main.temp, status:true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }

}

let getSortedCities= async function(req, res){
    try{

        let cities=["Bengaluru", "Mumbai",  "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let id=req.query.appid
        let cityObjArray=[]
        for(i=0; i<cities.length; i++){

        let options={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${id}`
        }
        let obj={city:cities[i]}
        let result= await axios(options);
        console.log(result.data.main.temp)
        obj.temp=result.data.main.temp
        cityObjArray.push(obj)
    }
        let sorted= cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        
        res.status(200).send({data:sorted, status:true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:err.message})
    }

}



module.exports.getWeather= getWeather
module.exports.getTemp= getTemp
module.exports.getSortedCities= getSortedCities