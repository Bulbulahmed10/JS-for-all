// search data

var arr = [4, 5, 6, 7, 8, 3, 44, 9, 93, 45]
var find = 7
var isFound = false


for (var i = 0; i < arr.length; i++) {
if (arr[i] == find) {
  console.log('Data Found at Index ' + i)
  isFound = true
  break;
} 
}
if(!isFound) {
  console.log('Data Not Found');
}