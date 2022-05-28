for (var i = 1; i < 10; i++){
  if (i % 3 == 0) {
    break
  } else {
    console.log(i)
  }
 
}    

var isRunning = true

while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1)
  if (rand == 9) {
    console.log('winner winner chicken dinner')
   break
  }  else{
    console.log('You have got ' + rand)
  }
}