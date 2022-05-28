var ob = {
  x: 40,
  y: 84,
  z: 75
}

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

var obj2 = Object.assign({}, ob)
obj2.x = 100

console.log(ob)
console.log(obj2);