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
}