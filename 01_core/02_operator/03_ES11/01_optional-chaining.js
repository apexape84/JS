// ES11(2020년)에 도입된 연산자

var obj = null;

var val = obj && obj.value;
console.log(val);

var val = obj?.value;
console.log(val);