var obj = {
  x: 40,
  y: 58,
  z: 84
}

// console.log('x' in obj)
// console.log('p' in obj)

for ( var i in obj) {
  console.log(i)
  console.log(i + ': ' + obj[i]);
}