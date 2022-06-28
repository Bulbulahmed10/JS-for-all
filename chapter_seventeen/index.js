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


let p1 = new Promise((resolve, reject) => {

setTimeout(resolve, 5000, 'One')
})

let p2 = new Promise((resolve, reject) => {

  setTimeout(resolve, 3000, 'Two')
  })

p1.then((v) => {

console.log(v);
})

p2.then((v) => {
  console.log(v);
})

function getIphone(isPassed) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve('I have got an Iphone')
      } else {
        reject(new Error('You have Failed'))
      }
    }, 2000)
  })
}

getIphone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  })