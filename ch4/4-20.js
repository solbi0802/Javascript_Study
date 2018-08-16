//자신을 재정의 하는 함수
var self = function () {
    console.log('a');
    return function () {
        console.log('b');
    }
}
self = self();
self();