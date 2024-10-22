/** 
 * 1.마침표
 * 2.대괄호 */

var panda = {
    name : '푸바오',
    eat : function(aa){
        console.log(`${this.name}가 ${aa}를 맛있게 먹어요`)
    }
}
console.log(panda.name);
console.log(panda['name']);

var obj = {
    'dash-key' : 'value',
    0 : 1
};

console.log(obj['dash-key']);
// 프로퍼티 키가 네이밍 규칙을 위반하는 경우 마침표 표기법을 사용 할 수 없음
console.log(obj[0]);