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

function makeWords(text) {

  try {
    let str = text.trim()
    let words = str.split(' ')
    return words
  } catch (e) { 
    // console.log(e.message);
    console.log('please provide a valid text');
  }
  let str = text.trim()
  let words = str.split(' ')

  return words
}

let words = makeWords(44)
console.log(words);