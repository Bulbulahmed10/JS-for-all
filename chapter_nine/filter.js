var arr = [3, 5, 9, 4, 5, 6, 7, 8, 2]

// var filteredArr = arr.filter(function(value){
//   return value % 2 == 1
// })
// console.log(filteredArr);

function myFilter(arr, cb) {
  var myArr = []
  for (var i = 0; i < arr.length; i++ ) {
    if (cb(arr[i], i, arr)) {
      myArr.push(arr[i])
    }
  }
  return myArr
}

console.log(myFilter(arr, function(value){
  return value % 2 == 1
}));

console.log(myFilter(arr, function(value){
  return value % 2 == 0
}));


console.log(myFilter(arr, function(value){
  return value > 4 == 0
}));

console.log(myFilter(arr, function(value){
  return value < 4 == 0
}));