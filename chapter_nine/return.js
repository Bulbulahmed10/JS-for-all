// function greet(msg) {
//   function greetings(name) {
//   return msg + ', ' + name + '!'
//   }
//   return greetings
// }

//  var gm = greet('Good Morning')
//  var msg = gm('MD BulBul')
//  console.log(msg);

 function greet(msg) {
   function greetings(name) {
     return msg + ', ' + name + '!'
   }
   return greetings
 }

 var gm = greet('Good Morning')
 var gn = greet('good night')
 var msg = gm('MD BulBul')
 console.log(msg);
 console.log(gn('twinkle cats'));


