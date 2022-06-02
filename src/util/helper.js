const printDate = function() {
    const vikas = new Date()
    console.log(vikas);
}
const printMonth = function() {
    const vikas = new Date()
    console.log(vikas.getMonth());
}
const getBatchInfo = function(){
    const vikas = new Date()
    console.log("radon w3d1 the topic of today is node.js module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo