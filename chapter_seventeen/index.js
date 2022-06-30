//  function sayMyName(name) {

//   setTimeout(() => {
//     // console.log('I have done...');
//     console.log(name);
//   }, 3000)

//  }

//  let output = sayMyName('Bulbul Ahmed')
//  console.log(output);

// AJAX

// Asynchronous Javascript and XML (JSON)

// const xhr = new XMLHttpRequest();
// xhr.open('GET', "https://jsonplaceholder.typicode.com/users");

// xhr.onload = function (e) {
//   if (xhr.readyState === 4) {
//     if(xhr.status === 200) {
//       let users = JSON.parse(xhr.response)
//       console.log(users);
//     } else {
//       console.log(xhr.response);
//     }
//   }

// };

// xhr.send();

// function getRequest(url, callback) {
//   const xhr = new XMLHttpRequest()
//   xhr.open('GET', url);

//   xhr.onload = function (e) {
//     if (xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         let response = JSON.parse(xhr.response)
//         callback(null, response)
//       } else {
//         callback(xhr.status, null)
//       }
//     }

//   }
//   xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//     res.forEach(b => alert(b.name))
//   }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res) => {
//   if (err) {
//     console.log(err);
//   } else {
//     res.forEach(r => console.log(r.title))
//   }
// })

// let arr = [1, 2, 3, 4]

// let sqrArr = arr.map(v => v*v)

// console.log(sqrArr);

// function asyncMap(arr, cb) {
//   return arr.map(v => {
//     // setTimeout(cb.bind(null, v), 0)
//     setTimeout(() => cb(v), 0)
//   })
// }

// let qbArr = asyncMap(arr, v => {
//   console.log(v)
// })
// console.log(qbArr)

// function getRequest(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onload = function (e) {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let response = JSON.parse(xhr.response);
//         callback(null, response);
//       } else {
//         callback(xhr.status, null);
//       }
//     }
//   };
//   xhr.send();
// }

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// getRequest(`${BASE_URL}/post/1`, (err, res) => {
//   if (err) {
//     throw new Error("Error Occurred");
//   }
//   let { userId } = res;

//   getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
//     if (err) {
//       throw new Error("Error Occurred");
//     }
//     getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
//       if (err) {
//         throw new Error("Error Occurred");
//       }
//       console.log(res);
//     });
//   });
// });

// let p1 = new Promise((resolve, reject) => {

// setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise((resolve, reject) => {

//   setTimeout(resolve, 3000, 'Two')
//   })

// p1.then((v) => {

// console.log(v);
// })

// p2.then((v) => {
//   console.log(v);
// })

// function getIphone(isPassed) {
//  return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isPassed) {
//         resolve('I have got an Iphone')
//       } else {
//         reject(new Error('You have Failed'))
//       }
//     }, 2000)
//   })
// }

// getIphone(false)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   })

const BASE_URL = 'https://jsonplaceholder.typicode.com'

//  fetch(`${BASE_URL}/users/1`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     return Promise.resolve('something')
//   })
//   .then(str => {
//     console.log(str);
//     return Promise.resolve('Another Promise')
//   })
//   .then(another => {
//     console.log(another);
//   })
//   .catch(e => {
//     console.log(e);
//   })

// function getRequest(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onload = function (e) {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let response = JSON.parse(xhr.response);
//         callback(null, response);
//       } else {
//         callback(xhr.status, null);
//       }
//     }
//   };
//   xhr.send();
// }

// function getRequest(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.onload = function (e) {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           let response = JSON.parse(xhr.response);
//           resolve(response)
//         } else {
//           reject(new Error('Error Occurred'))
//         }
//       }
//     };
//     xhr.send();
//   });
// }
//  getRequest(`${BASE_URL}/users/143`)
//   .then(data => {
//     console.log(data);
//   })

//   .catch(e => {
//     console.log(e.message);
//   })

// const delay = s => new Promise(resolve => setTimeout(resolve, s*1000))

// delay(2).then(() => console.log('2 Seconds Delay'))
// delay(1).then(() => console.log('1 Seconds Delay'))
// delay(3).then(() => console.log('3 Seconds Delay'))
// delay(2).then(() => console.log('2 Seconds Delay'))
// delay(5).then(() => console.log('5 Seconds Delay'))

// let p1 = Promise.resolve('Test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('REJECT')
// p2.catch(e => console.log(e))

// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//   .then(arr => {
//     console.log(arr);
//   })

// let p1 = new Promise(resolve => {
//   setTimeout(resolve, 5000, 'One')
// })

// let p2 = new Promise(resolve => {
//   setTimeout(resolve, 3000, 'Two')
// })

// let p3 = new Promise(resolve => {
//   setTimeout(resolve, 4000, 'Three')
// })

// let promiseArr = [p1, p2, p3]

// Promise.all(promiseArr)
// .then(arr => console.log(arr))

// Promise.race(promiseArr)
// .then(v => console.log(v))


// function myPromise() {
//   return Promise.resolve('Test Value')
// }

// console.log(myPromise());

// async function test() {
//   return 'Test'
// }
// test().then(v => alert(v))

// let p1 = Promise(resolve => {
//   setTimeout(resolve, 5000, 'test value')
// })

// async function myAsyncFunc() {
//   // p1.then(v => alert(v))
//   let v = await p1
//   console.log(v);
// }

// myAsyncFunc()
 
// async function fetchData () {
//  let res = await fetch('https://jsonplaceholder.typicode.com/users')

//  let data = await res.json()
//  let names = data.map(u => u.name)
//  console.log(names);
//  console.log(data);
// }
// fetchData()

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function promiseAll() {
  let result = await Promise.all(promises)
  console.log(result);
}
promiseAll()
