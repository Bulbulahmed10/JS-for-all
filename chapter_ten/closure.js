// Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope. 

// function test() {

//   var msg = 'I am learning lexical scope and closure'

//   return function () {

//     console.log(msg);
//   }
// }

var sayMsg = test()

sayMsg()

for (var i = 1; i <= 5; i++) {

  setTimeout(function(){
    console.log(i);
  }, 1000 * i )
}


for (var i = 1; i <= 10; i++) {
  
  (function (n) {

    setTimeout(function () {

      console.log(n);
    }, 1000 * n);

  })(i);
}


