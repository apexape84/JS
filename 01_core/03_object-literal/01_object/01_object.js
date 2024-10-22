/* JS에서 객체 생성방법
1. 객체리터럴
2. object 생성자 함수
3. 생성자 함수
4. Object.create()메소드
5. Class문법
 */
var student = {
    name : '이승현',
    age : 20,
    getInfo : function(){return `${this.name} 은 ${this.age}살 입니다`}
};

console.log(student);
console.log(typeof student);
