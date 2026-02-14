const sumAll = function sumAll (numA, numB) {
    let total = 0
    const min = Math.min(numA, numB)
    const max = Math.max(numA, numB)
    const rng = max - min  // You don't actually need this variable
    for (let i = min; i <= max; i++) {
        total += i  // Fixed: += instead of =+
    }
    return total
};
console.log(sumAll(5,10))

module.exports = sumAll