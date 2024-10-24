/* let numbers = [];
for(let i = 0; i < 10; i++){
    numbers[i] = Math.floor(Math.random()*100)+1;
}

console.table(numbers);*/
numbers=[1,2,3,4,5];

numbers.forEach(function(item,index,array){
    console.log(item);
    console.log(index);
    console.log(array);
})

numbers.forEach(item => console.log(item));

//console.log(global);

let result = [1,4,5,7,9]
console.log(result.some(item=>item%2==0));


result = [
    {name:'이승현', score: 100 },
    {name:'김남규', score: 95 },
    {name:'김규남', score: 59 }
]

//console.log(result.find(item => item.includ('규') ));