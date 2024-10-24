/** new 연산자를 이요해서 생성자 */

const user = {
    id : 'user01',
    login : function(){
        console.log(`${this.id} 님 로그인 성공`)
    }
};

function Student(name){
    this.name = name;
}

Student.prototype = user;

const student = new Student('이승현');

console.log(student.id);

user.login();

const ogiraffers = Object.create(student);

console.log(ogiraffers.id);
console.log(ogiraffers);
