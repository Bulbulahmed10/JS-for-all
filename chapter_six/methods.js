var arr = [4, 5, 9, 6]
// var arr2 = [5, 4, 8, 2, 23]
// console.log(arr.join(' | '))

// arr.fill(true)

// var arr3 = arr.concat(arr2)
// console.log(arr3)
// console.log(Array.isArray(arr))

var arr2 = Array.from(arr)
console.log(arr2)
var arr2 = arr

var a = [1, 2]
var b = Array.from(a)
b[0] = 5
console.log(a)
console.log(b)