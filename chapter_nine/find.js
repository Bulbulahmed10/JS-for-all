var arr = [4, 5, 6, 3, 7, 45, 8, 65, 9, 3, 5, 4];

var result = arr.find(function (value) {
  return value == 3;
});

console.log(result);

var myResult = arr.findIndex(function (value) {
  return value == 3;
});

console.log(myResult);

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      // return arr[i]
      return i;
    }
  }
}

var findResult = myFind(arr, function (value) {
  return value == 9;
});

console.log(findResult);
