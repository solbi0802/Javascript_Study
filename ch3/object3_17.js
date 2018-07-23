//3-17 push()메서드와 length 프로퍼티
var arr = ['zero', 'one', 'two'];

//push() 메서드 호출
arr.push('three');
console.log(arr);

arr.length = 5;
arr.push('four');
console.log(arr);