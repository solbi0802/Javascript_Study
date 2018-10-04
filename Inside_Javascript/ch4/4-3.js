var add = function sum(x,y) {
    return x + y;
};

console.log(add(3,4));
console.log(sum(3,4)); // 에러발생! 함수 표현식에서 사용된 함수 이름은 외부 코드에서 접근 x