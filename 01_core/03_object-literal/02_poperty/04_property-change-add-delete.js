var panda = {
    name : '푸바오',
    eat : function(aa){
        console.log(`${this.name}가 ${aa}를 맛있게 먹어요`)
    }
}

panda.age = 20;

delete panda.age;

console.log(panda);