// //  chapter seven: object in javascript

// // student 1:
// // math : 80
// // chemistry : 75
// // physics: 86
// // higher math: 90

// // [80, 75, 86, 90]

// // // var obj = {}
// // // console.log(typeof obj)

// // // obj.x = 10
// // console.log(obj)

// var point = {
//   x: 10,
//   y: 20
// }
// point.z = 30
// console.log(point);

// var obj = Object()
// obj.a = 10
// console.log(obj);
// var obj2 = new Object()
// obj2.b = 20
// console.log(obj2);

var point = {
  x: 10,
  y: 20,
  z: 15
}

// console.log(point.x);
// console.log(point.x + point.z);
// console.log(point['x']);
// console.log(point['z']);

// var show = 'z'
// console.log(point[show]);

point.x = 45
point.a = 35
console.log(point);
console.log(point.d);
point['y'] = 100
var prop = 'z'
point[prop] = 88
console.log(point);
delete point.a
console.log(point);