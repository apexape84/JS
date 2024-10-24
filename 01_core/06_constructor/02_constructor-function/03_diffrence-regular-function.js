function Student(name,age){
    if(!new.target){
        return new Student(name,age);
    }
    this.name = name,
    this.age = age,
    this.getInfo = function() {
        return `${this.name}은 ${this.age}세 입니다.`
    }
}

const student1 = Student('후이바오',1);
const student2 = new Student('푸바오',4);

console.log(student1);
console.log(student2);

