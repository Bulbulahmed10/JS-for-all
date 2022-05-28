// function add(a, b) {
//   var result = a + b
//   console.log(result)
// }

// add(10, 20)
// add(7, 43)

// function sub(a, b) {
//   var result = a - b
//   console.log(result)
// }

// sub(548, 124)
// sub(7445,7884545)

var arr1 = [1, 2, 4]
var arr2 = [5, 2, 5]
var arr3 = [45, 547, 7854]

// var sum1 = 0
// for (var i = 0; i <arr1.length; i++) {
//   sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0
// for (var i = 0; i <arr2.length; i++) {
//   sum2 += arr2[i]
// }
// console.log(sum2);

// var sum3 = 0
// for (var i = 0; i <arr3.length; i++) {
//   sum3 += arr3[i]
// }
// console.log(sum3);

function sumOfArray(arr){
  var sum = 0
for (var i = 0; i <arr.length; i++) {
  sum += arr[i]
}
console.log(sum);
}

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

function test(a, b, c) {
  console.log(JSON.stringify(arguments))
  console.log(typeof a)
}
// test()

function addAll() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}

// addAll(1, 2, 3)
// addAll(1, 2, 3, 4, 5, 6, 7)

addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7)