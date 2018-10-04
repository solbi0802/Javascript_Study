// 3-11 Call by Value와 Call by Reference 차이

var a = 100;
var objA = {value : 100 };

function  changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a); //100
console.log(objA); // { value : 200 }