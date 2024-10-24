increase = value => value +1;
decrease = value => value -1;

apply = (func,value) => func(value);

console.log(apply(increase,5));
console.log(apply(decrease,5));

console.log(apply(func=value=>value*2,5));

console.log([3,2,1,5,4].sort(func=(left,right)=>(right-left)));

