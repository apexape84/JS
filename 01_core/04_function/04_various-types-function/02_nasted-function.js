function outer(){
    var outerVal = "외부함수의 변수";
    function inner() {
        var innerVal = '내부함수의 변수';
        console.log(innerVal, outerVal);
    }
    inner();
}
outer();