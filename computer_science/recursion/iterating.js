// Write a function that takes in an arbitrarily 
//deep array or object and returns the total number of integers stored inside this array or object.

// ```javascript
// totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
// totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
// ```

// retrieve array or object 

// count # of integers 

const test = [
  [[5], 3], 
  0, 
  2, 
  ['foo'], 
  [], 
  [4, 
  [5, 6]]]

const obj = { a: 1, b: 
  { a: [5, 10], b: 11 } }

const totalIntegers = function(input) {
  let integerCount = 0
  // focus on object first,then array next - same shit 
  for (let key in input) {
    // check if object has a value
    if (input[key] != null) {
      // if value is a number, increment by one
      if (typeof(input[key])=='number'){
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
  // console.log(integerCount)
  // return integerCount
}

console.log(totalIntegers(test))