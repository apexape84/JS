/** [[Prototype]]
 * 자바스크립트에서 객체는 프로토타입이라는 
 */

const user = {
    id : 'user01',
    login : function(){
        console.log(`${this.id} 님 로그인 성공`)
    }
};

const student = {
    name : '이승현'
};

/** __proto__  [[Prototype]]의 getter와 setter의 역할을 한다. */

student.__proto__ = user;

console.log(student.id);

const ohgiraffersStudent = {
    class : 3,
    __proto__ : student
}

console.log(ohgiraffersStudent.id);
console.log(ohgiraffersStudent.name);