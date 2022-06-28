//  function sayMyName(name) {

//   setTimeout(() => {
//     // console.log('I have done...');
//     console.log(name);
//   }, 3000)

//  }

//  let output = sayMyName('Bulbul Ahmed')
//  console.log(output);

AJAX

Asynchronous Javascript and XML (JSON)

const xhr = new XMLHttpRequest();
xhr.open('GET', "https://jsonplaceholder.typicode.com/users");

xhr.onload = function (e) {
  // if (xhr.readyState === 4) {
  //   if(xhr.status === 200) {
  //     console.log(xhr.response);
  //   } else {
  //     console.log(xhr.response);
  //   }
  // }
  console.log(xhr.response);
};

xhr.send();
