//함수 표현식 방식과 함수 호이스팅
add(2,3);  //error! 함수 호이스팅 발생 x

var add = function (x, y) {
    return x + y;
};

add(3,4);


