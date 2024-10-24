const student1 = {
    name : '이승현',
    age : 20,
    getInfo : function(){
        return`${this.name}은 ${this.age}세 입니다.`;
    }
}


console.log(student1.getInfo());


function Student(name,age){
    this.name = name,
    this.age = age,
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`
    }
}

const student4 = new Student('푸바오',4);
const student5 = new Student('후이바오',1);

console.log(student4.getInfo());
console.log(student5.getInfo());