// var s = `fjjjjrjrj
// erjre
// rerrj   jgjj
//               gtitttuurert`
//               console.log(s);

// const { CleanPlugin } = require("webpack");

// const { LibManifestPlugin } = require("webpack");

// const { Generator } = require("webpack")

// const { CleanPlugin } = require("webpack");

// var age = 13
// var name = 'Bulbul Ahmed'
// console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not': ''} adult`);

// console.log(name.padStart(40, ' *'));
// console.log(name.padEnd(20, ' a'));
// console.log('B'.repeat(15));

// var vs let vs const

// let a = 10
// a = 100

// // console.log(a);

// if (true) {
//   let a = 10
// }
// // console.log(a);

// for (let i = 0; i < 7; i++) {

// }

// console.log(i);

//  let add = (a, b) => a + b

// console.log(add(45, 62));

// let sqr = x => x*x
// console.log(sqr(8));

// function testMe() {
//   console.log(this);
// }

// let obj = {
//   name: 'Bulbul Ahmed',
//   print: () => {
//     console.log(this);
//   }
// }

// testMe()
// obj.print()

// let obj = {
//   name: 'Bulbul Ahmed',
//   print : function() {
//     console.log(this.name);
//     setTimeout(function() {
//       alert(`Hello, ${this.name}`)
//     }, 1000)
//   }
// }
// obj.print()

// Default parameters in javascript

// function sqr(n=1) {
//   return n*n
// }

// console.log(sqr());

// first problem solve and explain

// let nums = [5, 10, 20]
// let sum = nums[1] + nums.sort()[1]

// console.log(sum);

// const months = ['March', 'Jan', 'Feb', 'Dea', 'Dad','Dcb', 'Daa'];
// months.sort();
// console.log(months);

// 10

// 5, 10, 20

// 10, 20, 5

// let obj = {
//   start : 1,
//   end : 10,
//   [Symbol.iterator]: function() {
//     let currentValue = this.start
//     const self = this
//     return{
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue++
//         }
//       }
//     }
//   }
// }

// for (let v of obj) {

//   console.log(v);
// }

// function sum (...rest) {
//   return rest.reduce(a,b) =>  a + b)
// }
// console.log(sum(1, 2, 3, 4))

// let a = [1, 2, 3]

// console.log(...a);

// let obj = {
//   a: 10,
//   b: 20,
//   c: 30
// }

// let obj2 = {
//   ...obj
// }

// let a = 10, b = 20

// let obj = {
//   a,
//   b,
//   print() {
//     console.log(this);
//   }
// }

// obj.print()

// var person = {
//   name: 'BulBul Ahmed',
//   email: 'bulbulahmed@gamil.com',
//   address: {
//     city:'Dhaka',
//     country: 'Bangladesh'
//   }
// }

// let { name, email, address, address:{city, country}} = person
// console.log(name, email, city, country);

// let arr = [1, 2, 3, 4, 5]

// let [first, second, , , last] = arr
// console.log(first, second, last );

// var obj = {
//   a: 10,
//   b: 20
// }
// console.log(Object.entries(obj));

// var objArr = [
//   ['a', 10],
//   ['b', 20]
// ]

// console.log(Object.fromEntries(objArr));

// let s1 = Symbol()
// let s2 = Symbol('test symbol')

// console.log(s1);
// console.log(s2);

// console.log(s1 === s2);

// let toss = {
//   HEAD: Symbol('HEAD'),
//   TAIL: Symbol('TAIL')
// }

// const arr = [1, 2, 3]

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function createIterator(collection) {
//   let i = 0
//   return{
//     next() {
//       return {
//         Done:i >= collection.length,
//         value: collection[i++]
//       }
//     }
//   }
// }
// const arr = [1, 2, 3]

// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// let str = 'TEXT'
// let iterateText = str[Symbol.iterator]()
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

// added for loop and generator

// const arr = [1, 2, 3]
// for (let v of arr) {
//   console.log(v);
// }

// for (let v of 'BulBul Ahmed') {
//   console.log(v);
// }

// let obj = {
//   a: 10,
//   b: 20
// }

// for (let v of obj) {
//   console.log(v);
// }

// const arr = [1, 2, 3]

//  function* generate(collection) {
//    for (let i = 0; i < collection.length; i++) {
//      yield collection[i]
//    }
//  }

//  let it = generate(arr)
//  console.log(it.next());
//  console.log(it.next());
//  console.log(it.next());
//  console.log(it.next());

// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)

// console.log(set.has(5));
// console.log(set);
// console.log(set.size);
// console.log(set.keys());
// console.log(set.values());

// let map = new Map(
//   [
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]

//   ]
// )
// map.set('d', 40)
// map.set({name: 'Bulbul Ahmed'}, 44)
// map.delete('c')
// console.log(map);
// console.log(map.get('b'));
// console.log(map.values());
// console.log(map.keys());
// console.log(map.entries());

// for (let [v, k] of map) {
//   console.log(v, k);
// }

// map.forEach((v, k)) => {
//   console.log(k, v)
// }

// let a = {a: 10}, b = {b: 20}
// let set = new Set([a, b])

// a = null
// console.log(set);

// let arr = [...set]
// console.log(arr);

// let weakSet = new WeakSet([a, b])
// a = null
// console.log(weakSet.has(b));

//  let weakMap = new WeakMap([[a, 45],[b, 85]])

// a = null
//  console.log(weakMap.get(a));
//  console.log(weakMap.has(b));

// function Rectangle(width, height) {
//   this.width = width
//   this.height = height
// }

// Rectangle.prototype.draw = function () {
//   console.log(this);
//   console.log('Drawing...');
// }

// let rect1 = new Rectangle(12, 14)

// class Rectangle {
//   constructor(width, height) {
//     this.width = width
//     this.height = height
//   }
//   draw() {
//     console.log('Drawing...');
//   }
// }

// let rect1 = new Rectangle(45, 56)
// console.log(rect1);

// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   print() {
//     console.log(this.name, this.email);
//   }
//   test () {
//     console.log(this);
//   }
//   static create(str) {
//     let person = JSON.parse(str);
//     return new Person(person.name, person.email);
//   }
// }

// let str = '{"name": "Bulbul Ahmed", "email": "bulbulahmed@gmail.com"}';

// let p1 = Person.create(str);
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print();




// function Shape() {
//   this.draw = function () {
//     console.log(this);
//   }
// }

// let s1 = new Shape() 
// let anotherDraw = s1.draw
// anotherDraw()

// let test = p1.test
// test()

// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()
// class Circle {
//   constructor(radius, name) {
//     this[_radius] = radius
//     this[_name] = name
//   }

//   [_draw]() {
//     console.log('Drawing...');
//   }
// }

// let c1 = new Circle(2, 'CRED')
// console.log(c1);

// console.log(Object.getOwnPropertyNames(c1));
// let key = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[key]);

// const _radius = new WeakMap()
// const _name = new WeakMap()
// class Circle {
//   constructor(radius, name) {
//     _radius.set(this, radius)
//     _name.set(this, name)
//   }

//   draw() {
//     console.log('Drawing...');
//     console.log(_radius.get(this), _name.get(this));
//   } 
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()

// const _radius = new WeakMap()
// const _name = new WeakMap()
// class Circle {
//   constructor(radius, name) {
//     _radius.set(this, radius)
//     _name.set(this, name)
//   }

//   get radius() {
//     return _radius.get(this)
//   }

//   set radius(v) {
//     _radius.set(this, v)
//   }

//   draw() {
//     console.log('Drawing...');
//     console.log(_radius.get(this), _name.get(this));
//   } 
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()
// c1.radius = 100
// console.log(c1.radius);

// class Shape {
//   constructor(color) {
//     this.color = color
//   }
//   draw() {
//     console.log('Drawing');
//   }
// }
  
// class Rectangle extends Shape {
//   constructor(color,width, height) {
//     super(color)
//     this.width = width
//     this.height = height
//   }

//   draw() {
//     console.log('Drawing a Rectangle...');
//   }

//   calculate() {
//     return this.width * this.height
//   }

// } 


// import Rectangle from "./Rectangle";
// let r = new Rectangle('green', 4, 5)  
// console.log(r);
// r.draw()

import * as func from './func'
console.log(func);

