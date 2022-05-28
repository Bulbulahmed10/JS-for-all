// Multi Dimensional Array

var arr = [
  [78, 71, 54, 45, 64, 54],
  [45, 85, 52, 65, 45, 78],
  [45, 78, 65, 62, 78, 46]
]
// console.log(arr[0][2])
// console.log(arr[1][3]);

for ( var i = 0; i<arr.length; i++){
  for(var j = 0; j< arr[i].length; j++ ){
    console.log('Element ' + i + ' : ' + arr[i][j]);
  }
}
