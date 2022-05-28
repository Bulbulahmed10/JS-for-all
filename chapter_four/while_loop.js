
// for (var i = 1; i <=10; i++) {
//   console.log(i)
// }

// var i = 10;

// while(i<=100) {
//   console.log(i)
//   i++


var isRunning = true

while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1)
  if (rand == 9) {
    console.log('winner winner chicken dinner')
    isRunning = false
  }  else{
    console.log('You have got ' + rand)
  }
}
