console.log(hello);
console.log(hi);

console.log(hello('이승현'));
//console.log(hi('이승현'));




var hi = function(name){
    return `${name} 하이~`;
}

function hello(name){
    return `${name} 헬로우~`;
}

console.log(hi('이승현'));