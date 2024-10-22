/*
프로퍼티 key란 빈 문자열을 포함하는 모든 문자열 또는 심볼값
key값을 설정하는 네이밍 규칙이 있음. 규칙을 맞춘다면 ''생략가능
*/

var obj = {
    normal : 'hi',
    '@ s p a c e @' : 'space value',
    '' : '',    // 빈 문자열 가능, 권장하지 않음
    0 : 1,  // 숫자키는 문자열로 변환됨
    var : 'var',    // 예약어도 사용가능, 권장하지 않음
}

console.log(obj);
// 출력시 순서는 정수 key는 자동정렬, 그 외 프로퍼티는 작성 순서로 정렬
var key = 'test'
obj[key] = 'test value';
console.table(obj);

