// 3-21 배열의 프로퍼티 열거

var arr = ['zero', 'one', 'two'];
arr.color = 'blue';
arr.name = 'number_array';
arr[3] = 'red';

for (var prop in arr) {
    console.log(prop, arr[prop]);
}

for(var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}