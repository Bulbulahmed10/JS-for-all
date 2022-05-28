function add(a, b, c) {
  return a + b + c
}

var result = add(57, 84, 38)
console.log(result);

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

var result2 = currying(545)(343)(34576)
console.log(result2);