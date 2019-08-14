var util = require('util');

console.log(util.isArray([]));
// true
console.log(util.isArray(new Array));
// true
console.log(util.isArray({}));
// false
console.log(util.isRegExp(/some regexp/));
// true
console.log(util.isRegExp(new RegExp('another regexp')));
// true
console.log(util.isRegExp({}));
// false
console.log(util.isDate(new Date()));
// true
console.log(util.isDate(Date()));
// false (without 'new' returns a String)
console.log(util.isDate({}));
// false
console.log(util.isError(new Error()));
// true
console.log(util.isError(new TypeError()));
// true
console.log(util.isError({ name: 'Error', message: 'an error occurred' }));
  // false