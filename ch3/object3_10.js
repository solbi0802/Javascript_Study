//3-10 기본 타입과 참조 타입의 비교 연산

var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = {value : 100 };
var objC = objB;

console.log(a == b); // true
console.log(objA == objB); // 동일 객체를 참조해야 성립함
console.log(objB == objC); // true