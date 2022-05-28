//  What is Pure Faction?

// `* It Returns the same result if given the same arguments`
// `* It does not cause observable side effects`

function sqr(n) {
  return n*n
}

console.log(sqr(4));
console.log(sqr(5));
console.log(sqr(48));

var n = 10
function change() {
  n = 100
}
change()
console.log(n);

var point = {
  x: 45,
  y: 84
}

function printPoint(point) {
  point.x = 200
  point.y = 790

  console.log(point);
}
printPoint(point)
console.log(point);