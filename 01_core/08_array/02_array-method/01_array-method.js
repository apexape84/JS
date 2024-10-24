const arr = [1,2,3,4,5,3]
console.log(arr);
console.log(arr.indexOf(3));
console.log(arr.indexOf(3,3));
console.log(arr.indexOf(7));
console.log(arr.includes(6));
arr.shift(4);
console.log(arr);
arr.unshift(8);
console.log(arr);

const arr2 = ['a','b','c','d','e'];
const mix = arr.concat(arr2);
console.log(arr);
console.log(arr2);
console.log(mix);

console.log(mix.slice(1,3));
console.log(mix);

console.log(mix.splice(3,2,'jdbc'));
console.log(mix);


console.log(mix.splice(3,2,'bbc',100,32));
console.log(mix);
