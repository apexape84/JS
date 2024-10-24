var x = 'global x';
var y = 'global y';

function outer(){
    var z = 'outer local z';
    console.log(x);
    console.log(y);
    console.log(z);
    function inner(){
        var x = 'inner local x';
        console.log(x);
        console.log(y);
        console.log(z);
    }
    inner();
    console.log(x);
}

outer();

