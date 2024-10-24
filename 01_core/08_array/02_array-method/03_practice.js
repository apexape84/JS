numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((pre, currV) => {
    return pre + currV; // return 한 결과는 다음 콜백의 첫번째 인자로 전달
},10);

console.log(`sum : ${sum}`);

/*const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log(nestedArray);
const flattenedArray = nestedArray.reduce((acc, cur) => acc.concat(cur));
console.log(flattenedArray);

/*const arr=[1,2];
console.log(arr);
const arr2 = arr.concat(3);
console.log(arr2);

const users = [  { name: 'A', age: 21 },  { name: 'B', age: 30 },  { name: 'C', age: 20 },  { name: 'D', age: 30 },];
const groupByAge = users.reduce((acc, cur) => {
    const { age } = cur;
    if (!acc[age]) acc[age] = [];
    acc[age].push(cur);
    return acc;
}, {});
console.log(groupByAge);*/
