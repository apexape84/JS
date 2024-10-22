console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('' || 'banana');
console.log('-------------------------------')
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);
console.log('-------------------------------')
var num = 1;
num % 2 == 0 && console.log("짝수입니다.");
num % 2 == 0 || console.log("홀수입니다.");

var obj = null;
//var val = obj.value;
var val = obj && obj.value;

console.log(val);