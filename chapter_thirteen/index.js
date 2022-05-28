Inheritance

function Person() {

  this.name = name
}

var p1 = new Person('BulBul Ahmed')
console.log(p1);

var person = {

  name: 'BulBul Ahmed'
}
console.log(person);

for (var i in person) {

  console.log(i);
}


var descriptor = Object.getOwnPropertyDescriptor(person, 'name')


console.log(descriptor);

 let baseObj = Object.getPrototypeOf(person)
 let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')

 console.log(descriptor);

Object.defineProperty(person, 'name', {

  enumerable: false,
  writable: false,
  configurable: false,
  value: 'Mohammad BulBul Ahmed'
})


function Person(name) {

  this.name = name
}

Person.prototype.PI = 3.1416

var p1 = new Person('BulBul Ahmed')
var p2 = new Person('BulBul')

console.log(Object.getPrototypeOf(p1))
console.log(Person.prototype); 

console.log(p1);
console.log(p2);


function Square (width) {

  this.width = width


}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.dir(String);

Square.prototype.draw = function() {


  console.log(this.width);
}

console.log(Square.prototype);
// console.log(sqr2.draw());
console.log(sqr1.width);

console.log(sqr1.prototype);







function Square(width) {

  this.width = width
  this.getWidth = function () {
    console.log('Width is ' + this.width);
    // this.draw()
  }
}

Square.prototype = {

  draw: function () {

    this.getWidth()
    console.log('Draw');
  },
  toString: function () {

    return 'My width is = ' + this.width
  }

}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

console.log(sqr1.draw());
console.log(sqr2.toString());




function Square(width) {

  this.width = width
  this.getWidth = function () {
    console.log('Width is ' + this.width);
    // this.draw()
  }
}

Square.prototype = {

  draw: function () {

    this.getWidth()
    console.log('Draw');
  },
  toString: function () {

    return 'My width is = ' + this.width
  }

}

var sqr1 = new Square(10)
var sqr2 = new Square(5)


// console.log(Object.keys(sqr1));

for (var i in sqr1) {
  console.log(i);
}


var name = 'bulbul'
console.log(name.toUpperCase());

