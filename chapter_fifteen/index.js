var s = `fjjjjrjrj
erjre 
rerrj   jgjj
              gtitttuurert`
              console.log(s);

const { CleanPlugin } = require("webpack");

var age = 13
var name = 'Bulbul Ahmed'
console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not': ''} adult`);  

console.log(name.padStart(40, ' *'));
console.log(name.padEnd(20, ' a'));
console.log('B'.repeat(15)); 

var vs let vs const

let a = 10
a = 100

// console.log(a);

if (true) {
  let a = 10
}
// console.log(a);

for (let i = 0; i < 7; i++) {

}

console.log(i);

 let add = (a, b) => a + b

console.log(add(45, 62));


let sqr = x => x*x 
console.log(sqr(8));

function testMe() {
  console.log(this);
}

let obj = {
  name: 'Bulbul Ahmed',
  print: () => {
    console.log(this);
  }
}

testMe()
obj.print()

let obj = {
  name: 'Bulbul Ahmed',
  print : function() {
    console.log(this.name);
    setTimeout(function() {
      alert(`Hello, ${this.name}`)
    }, 1000)
  }
}
obj.print()

Default parameters in javascript

function sqr(n=1) {
  return n*n
}

console.log(sqr());

first problem solve and explain

let nums = [5, 10, 20]
let sum = nums[1] + nums.sort()[1]

console.log(sum);

const months = ['March', 'Jan', 'Feb', 'Dea', 'Dad','Dcb', 'Daa'];
months.sort();
console.log(months);

10

5, 10, 20

10, 20, 5


let obj = {
  start : 1,
  end : 10,
  [Symbol.iterator]: function() {
    let currentValue = this.start 
    const self = this
    return{
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue++
        }
      }
    }
  }
}

for (let v of obj) {

  console.log(v);
}

function sum (...rest) {
  return rest.reduce(a,b) =>  a + b)
}
console.log(sum(1, 2, 3, 4))


let a = [1, 2, 3]

console.log(...a);

let obj = {
  a: 10,
  b: 20,
  c: 30
}


let obj2 = {
  ...obj 
}

let a = 10, b = 20

let obj = {
  a, 
  b,
  print() {
    console.log(this);
  }
}

obj.print()

var person = {
  name: 'BulBul Ahmed',
  email: 'bulbulahmed@gamil.com',
  address: {
    city:'Dhaka',
    country: 'Bangladesh'
  }
}

let { name, email, address, address:{city, country}} = person
console.log(name, email, city, country); 


let arr = [1, 2, 3, 4, 5]

let [first, second, , , last] = arr
console.log(first, second, last );

var obj = {
  a: 10,
  b: 20
}
console.log(Object.entries(obj));

var objArr = [
  ['a', 10],
  ['b', 20]
]

console.log(Object.fromEntries(objArr));


let s1 = Symbol()
let s2 = Symbol('test symbol')

console.log(s1);
console.log(s2);

console.log(s1 === s2);

let toss = {
  HEAD: Symbol('HEAD'),
  TAIL: Symbol('TAIL')
}
