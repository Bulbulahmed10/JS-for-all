console.log('I am line one');

setTimeout(() => {
  console.log('I am line two');
},3000)

setTimeout(() => {
  console.log('I am line three');
},0)

console.log('I am line Four');

setTimeout(() => {
  console.log('I am line five');
},1000)

 function sayMyName(name) {
  
  setTimeout(() => {
    // console.log('I have done...');
    console.log(name);
  }, 3000)

 }

 let output = sayMyName('Bulbul Ahmed')
 console.log(output);

