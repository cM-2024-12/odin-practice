const leapYears = function(year) {
    let output = false
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year %  400 === 0) {
            output = true
            }
        }
        else {
            output = true
        }
    }
return output
}
console.log(leapYears(2000))
console.log(leapYears(1000))
console.log(leapYears(2008))
// Do not edit below this line
module.exports = leapYears;
