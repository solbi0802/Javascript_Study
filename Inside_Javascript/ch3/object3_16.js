//3-16 배열 length 프로퍼티의 명시적 변경
var arr = [0, 1, 2];
console.log(arr.length);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);

