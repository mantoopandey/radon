const text = "     FunctionUP   ";
const result1 = text.trim();
const upperCase = function(){
    console.log(text.upperCase())
}
const lowerCase = function(){
    console.log(text.lowerCase())
}
module.exports.trim = result1
module.exports.upperCase = upperCase
module.exports.lowerCase= lowerCase