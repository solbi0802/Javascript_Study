//함수를 다른 함수의 리턴값으로 활용한 코드

var foo = function () {
    return function () {
      console.log('this function is the return value.')
    };
};

var bar = foo();
bar();