const isObject = (value) => typeof value === 'object' && value !== null;
const totalIntegers = function(input) {
    let integerCount = 0
    // focus on object first,then array next - same shit 
    // check if not object 
    if (!isObject(input)) {
        return
    }
    for (let key in input) {
      // check if object has a value
      if (input[key] != null) {
        // if value is a number, increment by one
        if (typeof(input[key])=='number' && Number.isInteger(input[key])){
          console.log('initialCount', integerCount)
          console.log(key, input[key])
          integerCount += 1 
        }
        // if value not a number, repeat above
        else if (typeof(input[key])=='object'){
          integerCount += totalIntegers(input[key]) // retrieve the return 
        }
      }
    }
    return integerCount
  }
  
// Do not edit below this line
module.exports = totalIntegers;
