/** 
 * 
 */
// 배열이 가지고 있는 값을 요소라고 부르며 자바스크립트의 모든 값을 다 넣을 수 있다.

const arr = ['바나나','복숭아','키위']
console.log(arr);

//
const arr2 = new Array();
console.log(arr2);

//인자가 1개이며 숫자인 경우
const arr3 = new Array(10);
console.log(arr3);

const arr4 = new Array(1,2,3);
console.log(arr4);

console.log(Array.of(10));

console.log(arr[0]);

console.log(Object.getOwnPropertyDescriptors(arr4));

