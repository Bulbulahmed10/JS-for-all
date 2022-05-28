var persons = [
  {
    name: 'A',
    age: 23
  },
  {
    name: 'B',
    age: 48
  },
  {
    name: 'C',
    age: 84
  },
  {
    name: 'D',
    age: 67
  }
]

var arr = [3, 4, 5, 3, 6, 9, 5, 3, 0, 2, 4, 7, 2, 8, -1]

// arr.sort()
// console.log(arr);

// arr.sort()
// console.log(persons);

arr.sort(function(a, b) {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
})

console.log(arr);

persons.sort(function(a, b) {
  if (a.age > b.age) {
    return 1
  } else if (a.age < b.age) {
    return -1
  } else {
    return 0
  }
})

console.log(persons);

var res1 = arr.every(function(value){
  return value % 2 == 0
})

console.log(res1);

var res2 = arr.every(function(value){
  return value >= 0
})

console.log(res2);

var res3 = arr.some(function(value) {
  return value % 2 == 1 
})

console.log(res3);

var res4 = arr.some(function(value) {
  return value < 0
})

console.log(res4);
  