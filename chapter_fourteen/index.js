function extend(Parent, Child) {

  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child
}


function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

function Square(width, color) {
  Shape.call(this, color);
  // console.log( Shape.call(this, tree));
  this.width = width;
}

extend(Shape, Square)

Square.prototype.draw = function () {
  console.log("Drawing");
};

// var shape = new Shape();
var sqr = new Square(48, "green");

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = this.radius;
}
extend(Shape, Circle)

Circle.prototype.common = function () {
  Shape.prototype.common.call(this)
  console.log('I am calling from circle and i have overridden');
}

var c = new Circle(4, 'black')


function Shape(color) {
  this.color = color

  // this.country = country
}

Shape.prototype.common = function () {
  console.log("I am Common Method");
};

function Square(width, color, tree, country) {

  Shape.call(this, color)
   this.tree = tree;
   this.country = country
  this.width = width;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square

Square.prototype.draw = function () {
  console.log("Drawing");
};

var shape = new Shape();
var sqr = new Square(48, 'green', 'mango', 'Bangladesh')

function mixin(target, ...sources) {
  Object.assign(target, ...sources)
}


var canWalk = {
  walk: function () {
    console.log('walking....');
  }
}

var canEat = {
  eat: function() {
    console.log('Eating....');
  }
}

var canSwim = {
  swim: function () {
    console.log('Swimming....');
  }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Bulbul Ahmed'

function Person(name) {
  this.name = name
}
mixin(Person.prototype, canWalk, canEat)

var person = new Person('BulBul Ahmed')
console.log(person);

function Goldfish(name) {
  this.name = name
}

mixin(Goldfish.prototype, canEat, canSwim)

var fish = new Goldfish('bla bla bla')
console.log(fish);