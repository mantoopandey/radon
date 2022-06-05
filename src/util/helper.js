
const printDate = function(){
    const vikas1 = new Date()
    console.log(vikas1)
}
const printMonth = function(){
    const vikas1 = new Date()
    console.log(vikas1.getMonth())
}
const getBatchInfo = function(){
    
    console.log('Radon W3D1 the topic for today is Nodejs module system')
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo