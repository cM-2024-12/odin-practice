const factorial = function(n) {
    // First: Check if input is valid (is it a number? is it an integer? is it non-negative?)
    if (typeof n != 'number' || !Number.isInteger(n) || n < 0) {
        return undefined
    }
    else if (n == 0) {
        return 1
    }
    else {
        return n * factorial(n-1)
    }
    // If invalid, return undefined
    
    // Second: Handle the base case (when n === 0)
    // Return 1
    
    // Third: Handle the recursive case
    // Return n * factorial(n-1)
};

factorial(4);
// Do not edit below this line
module.exports = factorial;