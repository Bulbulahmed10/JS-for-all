// let n = 10
// if (n > 5) {
//   throw new RangeError('N is Greater than 5')
// }

// function changeToInt(v) {
//   let result = Number.parseInt(v) 
//   if (!result) {
//   return  'Please provide a value which is able to convert in Integer'
//   }
//   return result
// }
 
// let result = changeToInt('hfgiuf')

// function makeWords(text) {

//   try {
//     let str = text.trim()
//     let words = str.split(' ')
//     return words
//   } catch (e) { 
//     // console.log(e.message);
//     console.log('please provide a valid text');
//   }
//   // let str = text.trim()
//   // let words = str.split(' ')

//   // return words
// }

// let words = makeWords(44)
// console.log(words);

class CustomError extends Error {
  constructor(msg) {
    
    super(msg)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
  }
}

try {
  console.log('I am line 1');
  throw new CustomError('I am your Error');
  console.log('I am line 2');
  console.log('I am line 3');

} catch (e) {
  console.log(e);
  console.dir(e);
} finally {
  console.log('I am finally block');
}
    