alert('I am your JS')

var rect = {
  width: 100,
  height: 50,

  draw: function () {
    console.log("l am a rectangle");
    this.printProperties();
    console.log(this);
  },

  printProperties: function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  },
};

rect.draw();
// // rect.height = 100

// // rect.draw()

function myFunc() {
  console.log(this);
  rect.printProperties();
}

new myFunc();

var another = {
  width: 47,
  height: 56,
  print: rect.printProperties,
};
console.log(another.print);
another.print();

var creatRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("l am a rectangle");
      this.printProperties();
      console.log(this);
    },

    printProperties: function () {
      console.log("My Width is " + this.width);
      console.log("My Height is " + this.height);
    },
  };
};

var rect1 = creatRect(10, 20);
rect1.draw();

var rect2 = creatRect(40, 60);
rect2.draw();

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("l am a rectangle");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  };
};

var rect3 = new Rectangle(45, 74);
rect3.draw();

var str = new String('str')
console.log('My String is ' + str );

function test() {
  console.log("something");
}

console.log(test.name, test.length);

var Rect = new Function(
    "width",
    "height",
    `this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("l am a rectangle");
    this.printProperties();
    console.log(this);
  };

  this.printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  }`
);

var rect5 = new Rect(4, 5)
console.log(rect5);

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

myFunc.call({a: 39, b: 48}, 10, 155)
myFunc.apply({a: 400, b: 254}, [48, 94])
myFunc()
myFunc.apply({})

Call, Apply
Bind

var test = myFunc.bind({a: 4, b: 3}, 4, 5)

var test = myFunc.bind({a: 4, b: 3})

test(5, 7 )

var n = 10

function change(n) {

  n = n + 100
  console.log(n);
}

change(n)
console.log(n);

var obj = {

  a: 28,
  b: 84
}

function changeMe(obj) {

  obj.a = obj.a + 100
  obj.b = obj.b + 100

  console.log(obj);
}

changeMe(obj)
console.log(obj);

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    x: 88,
    y: -100,
  };

  var printProperties = function () {
    console.log("My Width is " + this.width);
    console.log("My Height is " + this.height);
  }.bind(this)

  // this.getPosition = function() {

  //   return position
  // }

  this.draw = function () {
    console.log("l am a rectangle");
    printProperties();
    console.log('position: X=' + position.x + ' Y=' + position.y);
  };

  Object.defineProperty(this, 'position',{
    get: function () {
      return position
    },
    set: function (value) {
      position = value
    }
  })
};

var rect7 = new Rectangle(45, 65);
rect7.draw()
rect7.position = {
  x: 485,
  y: -123
}
console.log(rect7.position);

console.log(rect7);


