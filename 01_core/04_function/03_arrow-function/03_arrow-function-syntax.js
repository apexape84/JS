var message = function(){
    return "hello";
}

console.log(message());

message = () =>{
    return 'Arrow';
}

console.log(message());

message = (arg1, arg2) => 'Arrow' + arg1 + arg2;

console.log(message('a','b'));

message = arg1 => 'Arrow ' + arg1;
console.log(message('crazy'));