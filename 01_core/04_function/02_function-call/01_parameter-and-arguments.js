function hello(name){
    console.log(name)
    console.log(arguments)
    return `${name} 헬로`;
}

var result = hello('이승현');
console.log(result);

