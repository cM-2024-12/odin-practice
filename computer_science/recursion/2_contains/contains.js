contains = function(object, value) {
    for (let key in object) {
        // retreive value from key, compare against value
        if (Object.is(object[key],value)) {
            return true;  // Found it
        }
        if (typeof object[key] === 'object' && object[key] !== null) {
            if (contains(object[key], value)) {  // Recurse
                return true;
            }
        }
    }
    return false;  // Not found
};
  
// Do not edit below this line
module.exports = contains;
