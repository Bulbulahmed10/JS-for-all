{

 var x = 55

  function test() {
  var x = 45
  //  console.log(x);

  function nested() {
    // var y = 84
    var x = 48
  }
  // console.log(y);
  console.log(x);
  nested()
 }

 test()

}

 var a = 11

 function A() {
  
   var b = 12

   function B() {

     var c = 23
     console.log(c);
   }

   function C() {

     var d = 56
     console.log(d);
  }

   console.log(b);
   D()
   B()
   C()
 }

 function D(n) {
   return n + a
}

// A --- a, b, B(), C(), D()
// B --- a, b, c, B(), C(), D()
// C --- a, b, d, B(), C(), D()
// D --- a, n, A()


