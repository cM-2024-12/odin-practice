const contains = function(object, value) {
    for (let key in object) {
        if (object[key] === value) {
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

const meaningOfLifeArray = [42];
const object = {
  data: {
    duplicate: "e",
    stuff: {
      thing: {
        banana: NaN,
        moreStuff: {
          something: "foo",
          answer: meaningOfLifeArray,
        },
      },
    },
    info: {
      duplicate: "e",
      magicNumber: 44,
      empty: null,
    },
  },
};


console.log(contains(object, "foo"))