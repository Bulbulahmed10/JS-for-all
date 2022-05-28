function something(great, name) {
  function getFirstName() {
    if(name) {
      return name.split(' ')[0]
    } else {
      return ''
    }
  }
  var massage = great + ' ' + getFirstName()
  console.log(massage);
}
something('Good Morning', 'BulBul Ahmed')

var a = [1, 2, 5, 48, 'BulBul Ahmed']
console.log(a[2]);