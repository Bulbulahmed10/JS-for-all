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

let arr = [1, 2, 3, 4]

let sqrArr = arr.map(v => v*v)

console.log(sqrArr);

function asyncMap(arr, cb) {
  return arr.map(v => {
    // setTimeout(cb.bind(null, v), 0)
    setTimeout(() => cb(v), 0)
  })
}

let qbArr = asyncMap(arr, v => {
  console.log(v)
})
console.log(qbArr)